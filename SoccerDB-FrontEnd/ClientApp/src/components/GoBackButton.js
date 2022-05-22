import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { getMatchDay } from "../redux/actions";
import { makeStyles } from "@material-ui/core/styles";

export default function GoBackButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const useStyles = makeStyles({
    root: {
      padding: "1vw",
    },
    buttonStyle: {
      backgroundColor: "rgb(25, 118, 210)",
      color: "whitesmoke",
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant='contained'
        className={classes.buttonStyle}
        onClick={() => {
          dispatch(getMatchDay(null));
          navigate("/");
        }}
      >
        GO BACK
      </Button>
    </div>
  );
}
