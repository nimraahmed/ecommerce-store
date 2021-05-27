// import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeAppBar from "./navbarHome";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
  },
}));

export default function CategoriesSideBar() {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    //   console.log("clicking button");

    axios
      .get("http://localhost:5000/categories/all", { crossdomain: true })
      .then((response) => {
        setCategories(response.data);
      });
 
  };

  return (
    <div>
      {/* <HomeAppBar /> */}
      <div className={classes.root}>
        <CssBaseline />

        
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          {/* <Divider /> */}
          <List>
            {categories.map((category) => (
              <ListItem>
                {category.name}
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
        </main>
      </div>
    </div>
  );
}
