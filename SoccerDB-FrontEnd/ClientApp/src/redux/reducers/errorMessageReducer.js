const errorMessageReducer = (errorMessage = null, action) => {
  switch (action.type) {
    case "GET_ERROR_MESSAGE":
      return action.payload;
    default:
      return errorMessage;
  }
};

export default errorMessageReducer;
