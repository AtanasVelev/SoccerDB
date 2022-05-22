import React from 'react';
import MatchDays from './MatchDays';
import MatchDay from './MatchDay';
import { useSelector } from 'react-redux';
import GoBackButton from './GoBackButton';
import Toastr from './Toastr';
import { makeStyles } from '@material-ui/core';

export default function TournamentDetails() {
  const matchDay = useSelector((state) => state.matchDay);
  const tournamentYear = useSelector((state) => state.tournamentYear);
  const errorMessage = useSelector((state) => state.errorMessage);

  const useStyles = makeStyles({
    root: {
      width: '50%', 
      display: 'inline-block', 
      padding: '5vw' 
    }
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GoBackButton />
      {errorMessage != null && <Toastr type='error' message={errorMessage} />}
      {tournamentYear && <MatchDays />}
      {matchDay != null && <MatchDay />}
    </div>
  );
}
