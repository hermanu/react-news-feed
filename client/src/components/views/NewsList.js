import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridList, Breadcrumbs, Link } from "@material-ui/core";
import { GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import { SaveAlt, DeleteForever } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

import NewsFeed from "./NewsFeed";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
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
}));

const hostUrl = `http://localhost:5000/api/v1`;

const NewsList = (props) => {
  const [newsFeedList, setNewFeedList] = useState([]);

  useEffect(() => {
    getFeedList();
  }, []);

  async function getFeedList() {
    await axios.get(`${hostUrl}/feed`).then((response) => {
      setNewFeedList(response.data);
    });
  }

  async function getArchivedFeedList() {
    await axios
      .get("http://localhost:5000/api/v1/feed/archived")
      .then((response) => {
        setNewFeedList(response.data);
      });
  }

  const toggleArchived = async (feed) => {
    feed.archived = !feed.archived;
    setNewFeedList(newsFeedList.filter((feed) => !feed.archived));
    await axios.patch(`http://localhost:5000/api/v1/feed/${feed._id}`, feed);
  };

  const removeFeed = async (id) => {
    setNewFeedList(newsFeedList.filter((feed) => feed._id !== id));
    await axios.delete(`http://localhost:5000/api/v1/feed/${id}`);
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
      </Breadcrumbs>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {newsFeedList.map((feed) => (
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
            <NewsFeed feed={feed} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default NewsList;
