const tournamentNameReducer = (tournamentName="",action)=>{
    switch (action.type) {
        case 'GET_TOURNAMENT_NAME':
          return action.payload;
        default:
          return tournamentName;
      }

};
export default tournamentNameReducer;