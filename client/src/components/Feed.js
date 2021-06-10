import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  Typography,
  GridListTile,
  GridListTileBar,
  IconButton,
  Card,
} from "@material-ui/core";

import { SaveAlt, DeleteForever } from "@material-ui/icons";

import axios from "axios";
import { FeedContext } from "./FeedContext";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: "100%",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
  link: {
    cursor: "pointer",
  },
  title: {
    fontSize: 14,
    marginTop: 30,
  },
  content: {
    textOverflow: "ellipsis",
    justifyContent: "space-around",
    overflow: "hidden",
    maxHeight: 75,
    "&:hover": {
      overflow: "visible",
      whiteSpace: "wrap",
      textOverflow: "",
      transform: "translateZ(0)",
    },
    "& p": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  date: {
    fontSize: 12,
    marginRight: 5,
    marginTop: 5,
  },
}));
const hostUrl = `http://localhost:5000/api/v1`;

export default function Feed({ feed }) {
  const [feeds, setFeeds] = useContext(FeedContext);
  const classes = useStyles();

  const toggleArchived = async (feed) => {
    feed.archived = !feed.archived;
    await axios.put(`${hostUrl}/feed/${feed._id}`, feed);
    setFeeds(feeds.filter((feed) => !feed.archived));
  };

  const removeFeed = async (id) => {
    await axios.delete(`${hostUrl}/feed/${id}`);
    setFeeds(feeds.filter((feed) => feed._id !== id));
  };

  return (
    <GridListTile key={feed._id} cols={2} rows={1}>
      <GridListTileBar
        title={feed.title}
        titlePosition="top"
        actionIcon={
          !feed.archived ? (
            <IconButton
              aria-label={`${feed.title}`}
              className={classes.icon}
              onClick={() => toggleArchived(feed)}
            >
              <SaveAlt />
            </IconButton>
          ) : (
            <IconButton
              aria-label={`${feed.title}`}
              className={classes.icon}
              onClick={() => removeFeed(feed._id)}
            >
              <DeleteForever />
            </IconButton>
          )
        }
        actionPosition="left"
        className={classes.titleBar}
      />
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            component="h2"
            variant="h6"
            color="textPrimary"
          >
            {feed.description}
          </Typography>
          <Typography className={classes.content} variant="body2">
            {feed.content}
          </Typography>
          <Typography
            className={classes.date}
            component="span"
            color="textSecondary"
          >
            {new Date(feed.date).toLocaleDateString()} / {feed.author}
          </Typography>
        </CardContent>
      </Card>
    </GridListTile>
  );
}
