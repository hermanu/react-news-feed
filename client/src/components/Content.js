import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Accordion,
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    textOverflow: "clip",
    justifyContent: "space-around",
    overflow: "hidden",
    "& p": {
      maxHeigh: 75,
      // border: "1px solid",
      // padding: "2px 5px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
}));

export default function SimpleAccordion({ content }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Ver contenido
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content} variant="body2" component="p">
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
