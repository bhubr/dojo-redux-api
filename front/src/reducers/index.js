import { combineReducers } from 'redux';
import users from './users';
import form from './form';

const reducer = combineReducers({
  users: users,
  form: form
})

export default reducer;
