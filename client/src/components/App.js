import "./styles/App.css";
import NewsFeedList from "../components/views/NewsFeedList";
import ArchivedFeedList from "../components/views/ArchivedFeedList";
import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FeedProvider } from "./FeedContext";
function App() {
  return (
    <FeedProvider>
      <Router>
        <Container maxWidth="sm">
          <Switch>
            <Route exact path="/">
              <NewsFeedList />
            </Route>
            <Route exact path="/archived">
              <ArchivedFeedList />
            </Route>
          </Switch>
        </Container>
      </Router>
    </FeedProvider>
  );
}

export default App;
