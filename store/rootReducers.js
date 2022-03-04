import {combineReducers} from 'redux';

import todolistReducer from '../store/reducers/todolistReducer';
import sessionReducer from './reducers/sessionReducers';

export default combineReducers({
  sessionReducer,
  todolistReducer,
});
