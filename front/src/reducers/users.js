import { GET_USERS_SUCCESS } from '../actions/types';
import { CREATE_USER_SUCCESS } from '../actions/types';

const initialState = [];


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return [...state, ...action.users];
    case CREATE_USER_SUCCESS:
      return [...state, action.newUser]
    default:
      return state;

  }
}

export default reducer;

