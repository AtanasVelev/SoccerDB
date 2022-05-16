import { combineReducers } from 'redux';
import getTournamentYearReducer from './tournamentYearReducer';
import tournamentNameReducer from './tournamentNameReducer';
import getMatchDayReducer from './matchDayReducer'


const allReducers = combineReducers({
  tournamentYear: getTournamentYearReducer,
  tournamentName:tournamentNameReducer,
  matchDay:getMatchDayReducer
})

export default allReducers;