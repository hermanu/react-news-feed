import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import parse from "html-react-parser";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    marginBottom: 12,
    marginTop: 30,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard({ feed }) {
  const classes = useStyles();
  //   const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {feed.description}
        </Typography>
        <Typography variant="body2" component="p">
          {parse(feed.content)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Fecha de publicacion: {new Date(feed.date).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
