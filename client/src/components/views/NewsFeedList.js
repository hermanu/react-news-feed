import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridList, Breadcrumbs, Link } from "@material-ui/core";
import { useEffect } from "react";
import axios from "axios";

import NewsFeed from "../Feed";
import CreateFeed from "../CreateFeed";

import { FeedContext } from "../FeedContext";

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

const hostUrl = `http://localhost:5000/api/v1`;

const NewsList = () => {
  const [feeds, setFeeds, showCreate, setShowCreate] = useContext(FeedContext);

  useEffect(() => {
    getFeedList();
  }, []);

  async function getFeedList() {
    await axios.get(`${hostUrl}/feed`).then((response) => {
      setFeeds(response.data);
    });
  }

  async function getArchivedFeedList() {
    await axios.get(`${hostUrl}/feed/archived`).then((response) => {
      setFeeds(response.data);
    });
  }

  const toggleShowForm = () => {
    setShowCreate(!showCreate);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" onClick={getFeedList} className={classes.link}>
          News
        </Link>
        <Link
          color="inherit"
          onClick={getArchivedFeedList}
          className={classes.link}
        >
          Archived
        </Link>
        <Link color="inherit" onClick={toggleShowForm}>
          Create
        </Link>
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

export default NewsList;
