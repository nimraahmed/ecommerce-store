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
    backgroundColor: "rgba(76, 175, 80, 0)",
  },

  title: {
    flexGrow: 1,
    padding: "20px",
    color: "black",
  },
  buttons: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    padding: "20px",
    margin: "1 rem",
    color: "black",
  },
}));

export default function HomeAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <CssBaseline />
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Shopname
            </Link>
          </Typography>
          <Button classname={classes.buttons}>
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "black" }}
            >
              Login
            </Link>
          </Button>
          <Button classname={classes.buttons}>
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "black" }}
            >
              Signup
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
