import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTournamentName, getTournamentYear } from "../redux/actions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard({
  cardHeading,
  cardImageUrl,
  cardDescription,
  tournamentName,
  tournamentYear,
  isDisabled
}) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleOnClick = (tournamentName) => {
    dispatch(getTournamentName(tournamentName));
    dispatch(getTournamentYear(tournamentYear));
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={cardImageUrl} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {cardHeading}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {cardDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            handleOnClick(tournamentName);
          }}
          size='small'
          color='primary'
        >
         {isDisabled && "Coming Soon"} 
         {!isDisabled && <Link style={{textDecoration:'none'}} to='tournament'>Learn More</Link>}
        </Button>
      </CardActions>
    </Card>
  );
}
