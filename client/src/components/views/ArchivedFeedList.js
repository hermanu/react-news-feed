import React, { useContext, useEffect } from "react";

import FeedList from "../FeedList";
import { FeedContext } from "../FeedContext";
import axios from "axios";
const hostUrl = `http://localhost:5000/api/v1`;

const ArchivedFeedList = () => {
  const [feeds, setFeeds] = useContext(FeedContext);

  useEffect(() => {
    getArchivedFeedList();
  }, []);

  async function getArchivedFeedList() {
    await axios.get(`${hostUrl}/feed/archived`).then((response) => {
      setFeeds(response.data);
    });
  }
  return <FeedList feeds={feeds} />;
};

export default ArchivedFeedList;
