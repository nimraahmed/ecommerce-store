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
  },
  //   menuButton: {
  //     marginRight: theme.spacing(2),
  //   },
  title: {
    flexGrow: 1,
    textDecoration: "none",
  },
  buttons: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
}));

export default function SigninAppBar() {
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
              to="/signup"
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
