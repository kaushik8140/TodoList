import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = (email, password) => dispatch => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(async ({user}) => {
      console.log('getting user from server', user);
      console.log('getting user from uid', user.uid);
      console.log('getting user from name', user.email);
      dispatch(sessionSuccess(user));
      await AsyncStorage.setItem('Session_uid', user.uid);
      console.log('update after success');
    })
    .catch(error => {
      alert('Please EnterRegister Email');
      dispatch(sessionError(error.message));
    });
};

export const signupUser = (email, password) => dispatch => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({user}) => {
      // dispatch(signupSuccess(user));
      console.log('useruuid >>>>>>>>>>>>>>>>>>>>>' + user.uid);
      firestore().collection("users").doc(user.uid).set({});
    })
    .catch(error => {
      dispatch(sessionError(error.message));
    });
};

export const logoutUser = () => dispatch => {
  auth()
    .signOut()
    .then(() => {
      
      dispatch(sessionLogout());
    //  await AsyncStorage.clear();
     
    })
    .catch(error => {
      dispatch(sessionError(error.message));
    });
};

const sessionSuccess = user => ({
  type: 'SESSION_SUCCESS',
  user,
});

// const signupSuccess = user => ({
//   type: 'SIGNUP_SUCCESS',
//   user,
// });

const sessionLogout = () => ({
  type: 'SESSION_LOGOUT',
});

const sessionError = error => ({
  type: 'SESSION_ERROR',
  error,
});
