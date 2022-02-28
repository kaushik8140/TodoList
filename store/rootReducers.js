import {combineReducers} from 'redux';

import AuthReducers from '../store/reducers/reducers';
import todolistReducer from '../store/reducers/todolistReducer';
import sessionReducer from './reducers/sessionReducers';

export default combineReducers({
  AuthReducers,
  todolistReducer,
  sessionReducer
});
