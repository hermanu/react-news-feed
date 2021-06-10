import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridList, Breadcrumbs, Link as MuiLink } from "@material-ui/core";
import { Link } from "react-router-dom";

import NewsFeed from "./Feed";
import CreateFeed from "./CreateFeed";
import { FeedContext } from "./FeedContext";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: 20,
  },
  gridList: {
    width: 500,
    height: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
}));

const FeedList = () => {
  const [feeds, showCreate, setShowCreate] = useContext(FeedContext);

  const toggleShowForm = () => {
    setShowCreate(!showCreate);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/" className={classes.link}>
          News
        </Link>
        <Link color="inherit" to="/archived" className={classes.link}>
          Archived
        </Link>
        <MuiLink color="inherit" onClick={toggleShowForm}>
          Create
        </MuiLink>
      </Breadcrumbs>
      <CreateFeed />

      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {feeds.map((feed) => (
          <NewsFeed key={feed._id} feed={feed} />
        ))}
      </GridList>
    </div>
  );
};

export default FeedList;
