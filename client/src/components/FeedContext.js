import React, { createContext, useState } from "react";

export const FeedContext = createContext();

export const FeedProvider = (props) => {
  const [feeds, setFeeds] = useState([]);
  const [showCreate, setShowCreate] = useState(false);

  return (
    <FeedContext.Provider value={[feeds, setFeeds, showCreate, setShowCreate]}>
      {props.children}
    </FeedContext.Provider>
  );
};
