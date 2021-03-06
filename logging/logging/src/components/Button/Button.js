import React, { Children } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavLink to="/logs" activeStyle={{ backgroundColor: "black" }}>
        <Button variant="outlined" color="primary">
          {children}
        </Button>
      </NavLink>
    </div>
  );
}
