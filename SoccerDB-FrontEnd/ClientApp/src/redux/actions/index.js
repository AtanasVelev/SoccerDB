
  export const getTournamentYear = (tournamentYear) => {
    return {
      type: 'GET_TOURNAMENT_YEAR',
      payload: tournamentYear,
    }
  };
  
  export const getTournamentName = (tournamentName) => {
    return {
      type: 'GET_TOURNAMENT_NAME',
      payload: tournamentName,
    }
  };

  export const getMatchDay = (matchDay) => {
    return {
      type: 'GET_MATCHDAY',
      payload: matchDay,
    }
  };