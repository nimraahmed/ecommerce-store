import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AdminPanel() {
  const classes = useStyles();
  const [data, setData] = useState({
    name: "",
    description: "",
    quantity: 0,
    price: 0,
  });
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  function handle(e) {
    const newData = { ...data };
    console.log(newData);
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  async function submit(e) {
    console.log("submit button");
    e.preventDefault();
    await axios
      .post("http://localhost:5000/products/add", {
        name: data.prodname,
        description: data.description,
        quantity: data.quantity,
        price: data.price,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Product Info
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="productName"
                variant="outlined"
                fullWidth
                id="name"
                label="Product Name"
                autoFocus
                value={data.name}
                onChange={(e) => handle(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="description"
                label="Description"
                name="description"
                value={data.description}
                onChange={(e) => handle(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="quantity"
                label="Quantity"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                value={data.quantity}
                onChange={(e) => handle(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="price"
                label="Price"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                value={data.price}
                onChange={(e) => handle(e)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => submit(e)}
          >
            Add Product
          </Button>
          <Grid container justify="flex-end"></Grid>
        </form>
      </div>
      <h1>{response}</h1>
      <h1>{error}</h1>
    </Container>
  );
}
