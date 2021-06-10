import React, { useContext, useEffect } from "react";
import axios from "axios";

import FeedList from "../FeedList";
import { FeedContext } from "../FeedContext";

const hostUrl = `http://localhost:5000/api/v1`;

const NewsFeedList = () => {
  const [feeds, setFeeds] = useContext(FeedContext);
  useEffect(() => {
    getFeedList();
  }, []);

  async function getFeedList() {
    await axios.get(`${hostUrl}/feed`).then((response) => {
      setFeeds(response.data);
    });
  }

  return <FeedList feeds={feeds} />;
};

export default NewsFeedList;
