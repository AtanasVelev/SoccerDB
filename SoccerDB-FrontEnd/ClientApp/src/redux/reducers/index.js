import { combineReducers } from 'redux';
import tournamentYearReducer from './tournamentYearReducer';
import tournamentNameReducer from './tournamentNameReducer';
import matchDayReducer from './matchDayReducer';
import errorMessageReducer from './errorMessageReducer';

const allReducers = combineReducers({
  tournamentYear: tournamentYearReducer,
  tournamentName: tournamentNameReducer,
  matchDay: matchDayReducer,
  errorMessage: errorMessageReducer,
});

export default allReducers;
