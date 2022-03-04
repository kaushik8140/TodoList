import firestore from '@react-native-firebase/firestore';


export const Add = (uid, item) => dispatch => {
  firestore()
    .collection('users')
    .doc(uid)
    .set({
      todos: [item],
      
    })
    .then(() => {
      console.log('User added set method!');
    console.log("uid from action screen",uid)

      dispatch(add(item));
    });

};


export const Update = (uid,updatedTodo) => dispatch => {
  const newArray = [];
  firestore()
    .collection('users')
    .doc(uid)
    .update({
      todos: newArray,
    })
    .then(() => {
      dispatch(update(updatedTodo));
      console.log('User added!');
    });
};

export const Remove = (uid, index) => dispatch => {
  firestore()
    .collection('users')
    .doc(uid)
    .delete()
    .then(() => {
      dispatch(remove(index));
      console.log('User deleted!');
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

export const update = updatedTodo => ({
  type: 'UPDATE',
  index: updatedTodo,
});
