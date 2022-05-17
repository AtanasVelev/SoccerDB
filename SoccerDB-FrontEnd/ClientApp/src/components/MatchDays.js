import React from "react";
import { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useSelector, useDispatch } from "react-redux";
import { getErrorMessage, getMatchDay } from "../redux/actions";
import axios from "axios";
import {
  WC_2014_MATCHES_ENDPOINT,
  WC_2018_MATCHES_ENDPOINT,
} from "../common/constants";

export default function MatchDays() {
  const [matchDays, setMatchDays] = useState([]);
  const dispatch = useDispatch();
  const tournamentName = useSelector((state) => state.tournamentName);
  const tournamentYear = useSelector((state) => state.tournamentYear);
  const matchDay = useSelector((state) => state.matchDay);
  const matchesEndpoint = {};

  switch (tournamentYear) {
    case "2014":
      matchesEndpoint.value = WC_2014_MATCHES_ENDPOINT;
      break;
    case "2018":
      matchesEndpoint.value = WC_2018_MATCHES_ENDPOINT;
      break;
    default:
      matchesEndpoint.value = '';
  };

     useEffect(() => {
     axios.get(matchesEndpoint.value).then((response) => {
      //console.log(response.data.matchDays);
      setMatchDays(response.data.matchDays);

    }).catch((error)=>{
    dispatch(getErrorMessage(error.message));
      //console.log("error:",  error.message);
    });
    
  }, [matchesEndpoint.value, dispatch]);

  const handleChange = (event) => {
    dispatch(getMatchDay(event.target.value));
  };
  return (
    <Box sx={{ minWidth: 120 }}>  
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label' style={{ fontSize: "1.5vw" }}>
          {tournamentName}
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={matchDay == null ? "" : matchDay}
          label='MatchDay'
          onChange={handleChange}
        >
          {matchDays.map((item, index) => (
            <MenuItem value={item} key={item + "_" + index + item.score1}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};