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
    padding: "40px",
  },
  //   menuButton: {
  //     marginRight: theme.spacing(2),
  //   },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  buttons: {
    flexGrow: 1,
    marginLeft: theme.spacing(5),
    padding: "20px",
    margin: "100px",
  },
}));

export default function SignupAppBar() {
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
          <Button classname={classes.buttons} color="inherit">
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
