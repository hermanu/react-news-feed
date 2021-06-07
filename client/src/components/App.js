import "./styles/App.css";
import NewsList from "../components/views/NewsList";
import { Container } from "@material-ui/core";
import React from "react";

function App() {
  return (
    <Container maxWidth="sm">
      <NewsList />
    </Container>
  );
}

export default App;
