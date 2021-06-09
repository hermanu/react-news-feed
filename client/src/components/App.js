import "./styles/App.css";
import NewsList from "../components/views/NewsFeedList";
// import ArchivedList from "../components/views/ArchivedFeedList";
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
              <NewsList />
            </Route>
            <Route exact path="/archived">
              {/* <ArchivedList /> */}
            </Route>
          </Switch>
        </Container>
      </Router>
    </FeedProvider>
  );
}

export default App;
