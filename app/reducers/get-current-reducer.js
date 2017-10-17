const getCurrentReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_INIT_DATA':
      return [ ...state, Object.assign({}, action.apiResult) ]
    default:
      return state;
  };
};

export default getCurrentReducer;
