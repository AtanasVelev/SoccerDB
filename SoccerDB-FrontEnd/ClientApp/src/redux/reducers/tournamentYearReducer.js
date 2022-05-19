const tournamentYearReducer = (tournamentYear = "", action) => {
  switch (action.type) {
    case "GET_TOURNAMENT_YEAR":
      return action.payload;
    default:
      return tournamentYear;
  }
};

export default tournamentYearReducer;
