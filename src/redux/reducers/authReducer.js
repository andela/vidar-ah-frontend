const initialState = {
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        data: {
          ...action.payload
        },
      };

    case 'SIGNUP_ERROR':
      return {
        ...state,
        errors: {
          ...action.errors
        }
      };
    default: return state;
  }
};
