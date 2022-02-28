import auth from '@react-native-firebase/auth';

export const loginUser = (email, password) => dispatch => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
        // alert("success");
        console.log("getting user from server", user);
        dispatch(sessionSuccess(user));
        console.log("update after success");
    })
    .catch(error => {
      alert(error);
      dispatch(sessionError(error.message));
    });
};

export const signupUser = (email, password) => dispatch => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(signupSuccess(user));
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
    })
    .catch(error => {
      dispatch(sessionError(error.message));
    });
};

const sessionSuccess = user => ({
  type: 'SESSION_SUCCESS',
  user,
});

const signupSuccess = user => ({
  type: 'SIGNUP_SUCCESS',
  user,
});

const sessionLogout = () => ({
  type: 'SESSION_LOGOUT',
});

const sessionError = error => ({
  type: 'SESSION_ERROR',
  error,
});
