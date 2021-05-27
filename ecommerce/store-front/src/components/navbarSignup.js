import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Nunito Sans, sans-serif",
    paddingBottom: '30px'
  },
  appbar: {
    background: 'lightblue',
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: "2rem",
  },

  title: {
    flexGrow: 1,
    padding: "20px",
    color: "black",
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: "2rem",
  },
  buttons: {
    marginLeft: theme.spacing(1),
    padding: "20px",
    margin: "0.5 rem",
    color: "black",
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: "1.3rem",
  },
  wrapper: {
    width: "95%",
    margin: "0 auto",
  },
}));

export default function SignupAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <CssBaseline />
        <Toolbar className={classes.wrapper}>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Shopname
            </Link>
          </Typography>
          <Button className={classes.buttons} >
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "black" }}
            >
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
