import firestore from '@react-native-firebase/firestore';

export const Add = (uid, item, todos) => dispatch => {
  const previtems = [...todos];

  firestore()
    .collection('users')
    .doc(uid)
    .set({
      todos: [...previtems, item],
    })
    .then(() => {
      console.log('User added set method!');
      console.log('uid from action screen', uid);

      dispatch(add(item));
    });
};

export const Remove = (uid, index, todos) => dispatch => {
  const clonedArray = [...todos];

  clonedArray.splice(index, 1);

  console.log('old Dala : ', todos);

  console.log('new Dala : ', clonedArray);

  firestore()
    .collection('users')
    .doc(uid)
    .update({
      todos: clonedArray,
    })
    .then(() => {
      dispatch(remove(index));
      console.log('User added!');
    });
};

export const add = item => ({
  type: 'ADD',
  todo: item,
});

export const remove = index => ({
  type: 'REMOVE',
  index: index,
});
