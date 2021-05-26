import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeAppBar from "./navbarHome";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    // paddingTop: "20px",
    backgroundImage:
      "url(https://images.pexels.com/photos/5498382/pexels-photo-5498382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeAppBar />
      <div></div>
    </div>
  );
}
