// import AsyncStorage from '@react-native-async-storage/async-storage'
const initialState = {
  restoring: false,
  loading: false,
  user: {},
  error: null,
  logged: null,
  registered: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SESSION_SUCCESS':
      console.log('getting session data : ', action.user);
      // AsyncStorage.setItem('Session_uid',action.user.uid);
      // console.log('getting session data uid : ', action.user.uid);
      return {
        ...state,
        restoring: false,
        loading: false,
        user: action.user,
        error: null,
        logged: true,
        registered: null,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        restoring: false,
        loading: false,
        user: action.user,
        error: null,
        logged: null,
        registered: true,
      };
    case 'SESSION_ERROR':
      return {
        ...state,
        restoring: false,
        loading: false,
        user: null,
        error: action.error,
        logged: null,
        registered: null,
      };
    case 'SESSION_LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;
