import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { FeedContext } from "./FeedContext";
import { useHistory } from "react-router-dom";

import axios from "axios";
const hostUrl = `http://localhost:5000/api/v1`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const defaultValues = {
  title: "",
  description: "",
  content: "",
  author: "",
};

export default function CreateFeed() {
  const history = useHistory();
  const classes = useStyles();
  const [feeds, setFeeds, showCreate, setShowCreate] = useContext(FeedContext);
  const [formValues, setFormValues] = useState(defaultValues);

  const formSubmit = async (e) => {
    e.preventDefault();
    await createFeed(formValues);
    setFormValues(defaultValues);
    setShowCreate(!showCreate);
    history.push("/"); // Forced to go NewsFeedList
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  async function createFeed(feed) {
    await axios.post(`${hostUrl}/feed`, feed).then((response) => {
      setFeeds([response.data, ...feeds]);
    });
  }

  return (
    <div>
      {showCreate ? (
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={formSubmit}
        >
          <TextField
            name="title"
            value={formValues.title}
            id="titleInput"
            label="Titulo"
            onChange={handleInputChange}
          />
          <TextField
            name="description"
            value={formValues.description}
            id="descriptionInput"
            label="Descripcion"
            onChange={handleInputChange}
          />
          <TextField
            name="content"
            value={formValues.content}
            id="contentInput"
            label="Contenido"
            onChange={handleInputChange}
          />
          <TextField
            name="author"
            value={formValues.author}
            id="authorInput"
            label="Autor"
            onChange={handleInputChange}
          />

          <Button variant="outlined" type="submit">
            Guardar
          </Button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
