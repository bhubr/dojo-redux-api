const initialState = {
  firstname: '',
  lastname: '',
  avatar: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      return (
        {
          ...state,
          [action.name]: action.value
        }
        //   const newState = { ...state };
        // newState[action.name] = action.value;
        // return newState;
      )

    default:
      return state;
  }
}

export default reducer;