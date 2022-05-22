import React from "react";
import { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core//Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon  from "@material-ui/icons/KeyboardArrowUp";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  WC_2014_MATCH_DAY_ENDPOINT,
  WC_2018_MATCH_DAY_ENDPOINT,
} from "../common/constants";
import { getErrorMessage } from "../redux/actions";

function Row(props) {
  const { match } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {match.team1.name}({match.score1}) vs {match.team2.name}({match.score2})
        </TableCell>
        <TableCell>{match.date.substring(0, 10)}</TableCell>
        <TableCell>{match.city}</TableCell>
        <TableCell>{match.group}</TableCell>
        <TableCell>{match.stadium == null ? "-" : match.stadium.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                GOAL DETAILS:
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "900" }}>
                      {match.team1.name + ": " + match.score1}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {match.goals1 != null &&
                    match.goals1.map((goal, index) => (
                      <TableRow key={goal.playerName + index + goal.minute}>
                        <TableCell component='th' scope='row'>
                          {goal.playerName + " `" + goal.minute}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "900" }}>
                      {match.team2.name + ": " + match.score2}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {match.goals2 != null &&
                    match.goals2.map((goal, index) => (
                      <TableRow key={goal.playerName + index - 1 + goal.minute}>
                        <TableCell component='th' scope='row'>
                          {goal.playerName + " `" + goal.minute}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function MatchDay() {
  const tournamentYear = useSelector((state) => state.tournamentYear);
  const matchDay = useSelector((state) => state.matchDay);
  const [matches, setMatches] = useState([]);
  const dispatch = useDispatch();
  const matchesEndpoint = {};

  switch (tournamentYear) {
    case "2014":
      matchesEndpoint.value = WC_2014_MATCH_DAY_ENDPOINT;
      break;
    case "2018":
      matchesEndpoint.value = WC_2018_MATCH_DAY_ENDPOINT;
      break;
  }
  const URL = `${matchesEndpoint.value}/${matchDay}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        dispatch(getErrorMessage(error.message));
      });
  }, [URL, dispatch]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Teams</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Group</TableCell>
              <TableCell>Stadium</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matches.map((match, index) => (
              <Row key={match.num + index + match.team1.name} match={match} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
