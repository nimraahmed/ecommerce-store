import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import AdminNavBar from "./adminNavBar";
import Categories from "../categories";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "black",
    color: "white",
    border: "2px solid black",
    borderRadius: "8px",
    fontFamily: "Nunito",
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
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  const selectedFile = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  async function submit(e) {
    console.log("submit button");
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", file);
    fd.append("filename", fileName);
    await axios
      .post("http://localhost:5000/products/add", {
        name: data.prodname,
        description: data.description,
        quantity: data.quantity,
        price: data.price,
        img: fd,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });
  }

  // const saveFile = (e) => {
  //   setFile(e.target.files[0]);
  //   setFileName(e.target.files[0].name);
  // };

  // const uploadFile = async (e) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("fileName", fileName);
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5000/products/add",
  //       formData
  //     );
  //     console.log(res);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // };

  return (
    <Container component="main" maxWidth="xs">
      <AdminNavBar />
      <CssBaseline />
      <Categories />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Product
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
                //autoFocus
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
            <div>
              <input type="file" onChange={selectedFile} />
              {/* <button onClick={uploadFile}>Upload</button> */}
            </div>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // color="black"
            className={classes.submit}
            onClick={(e) => {
              submit(e);
            }}
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
