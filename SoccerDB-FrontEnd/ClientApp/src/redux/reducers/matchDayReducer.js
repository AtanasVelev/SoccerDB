const matchDayReducer = (matchDay =null, action) => {
    switch (action.type) {
      case 'GET_MATCHDAY':
        return action.payload;
      default:
        return matchDay;
    }
  };
  
  export default matchDayReducer;