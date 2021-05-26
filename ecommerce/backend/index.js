const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const path = require("path");

const authRoute = require("./routes/auth");
const categoryRoute = require("./routes/category");
const prodRoute = require("./routes/product");

dotenv.config();

//connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

//to serve static images
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


//route middlewares
app.use("/backend", authRoute);
app.use("/categories", categoryRoute);
app.use("/products", prodRoute);

//server listen
app.listen(5000, () => {
  console.log("server works!");
});
