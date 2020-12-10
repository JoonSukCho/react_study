import React, { useState } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Typography,
  TextareaAutosize,
  makeStyles,
  Avatar,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { GetApp, Pageview } from "@material-ui/icons";
import CircularStatic from "./components/Progress/CircularStatic";

const useStyles = makeStyles({
  root: {
    padding: 10,
    marginTop: 20,
  },
  avatar: {
    backgroundColor: red[500],
    marginRight: 10,
  },
  contents: {
    display: "flex",
    flexDirection: "row",
  },
  pointer: {
    cursor: "pointer",
  },
});

const Logs = () => {
  const classes = useStyles();
  const data = [
    { level: "L1", contents: "content1", btn: "button1" },
    { level: "L2", contents: "content2", btn: "button2" },
    { level: "L3", contents: "content3", btn: "button3" },
    { level: "L4", contents: "content4", btn: "button4" },
    { level: "L5", contents: "content5", btn: "button5" },
  ];

  return (
    <div>
      {data.map((value, index) => (
        <Card elevation={10} className={classes.root} key={index}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {value.level}
              </Avatar>
            }
            titleTypographyProps={{ variant: "h5" }}
            title="Description"
          />
          <CardContent className={classes.contents}>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item>
                <NavLink to="/logDetail">
                  <Pageview
                    className={classes.pointer}
                    fontSize="large"
                  ></Pageview>
                </NavLink>
              </Grid>
              <Grid item>View Data</Grid>
              <Grid item>
                <GetApp className={classes.pointer} fontSize="large"></GetApp>
              </Grid>
              <Grid item>Download Stored CSV Files</Grid>
              <Grid item>
                <CircularStatic></CircularStatic>
              </Grid>
            </Grid>
          </CardContent>
          {/* <CardActions></CardActions> */}
        </Card>
      ))}
    </div>
  );
};

export default Logs;
