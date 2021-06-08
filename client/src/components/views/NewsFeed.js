import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import SimpleAccordion from "./Content";

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
    marginBottom: 8,
    marginTop: 30,
  },
  content: {
    marginBottom: 10,
    "& p": {
      textOverflow: "hidden",
    },
  },
  date: {
    fontSize: 12,
  },
});

export default function OutlinedCard({ feed }) {
  const classes = useStyles();
  //   const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          component="h2"
          variant="subtitle1"
          color="textPrimary"
        >
          {feed.description}
        </Typography>
        <SimpleAccordion content={parse(feed.content)} />
        <Typography
          className={classes.date}
          component="p"
          color="textSecondary"
        >
          {new Date(feed.date).toLocaleDateString()} / {feed.author}
        </Typography>
      </CardContent>
    </Card>
  );
}
