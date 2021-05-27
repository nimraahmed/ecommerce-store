import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Nunito Sans, sans-serif",
    paddingBottom: "100px",
  },
  appbar: {
    background: "black",
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: "1rem",
  },

  title: {
    flexGrow: 1,
    padding: "20px",
    color: "white",
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: "1rem",
  },
  wrapper: {
    width: "95%",
    margin: "0 auto",
  },
}));

export default function AdminNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <CssBaseline />
        <Toolbar className={classes.wrapper}>
          <Typography variant="h6" className={classes.title}>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
