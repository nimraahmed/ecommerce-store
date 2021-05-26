const router = require("express").Router();
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const adminAuth = require("../validation/adminAuth");

const Product = require("../models/Product");
const Category = require("../models/Categories");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({ storage });

//create product
router.post("/add", upload.array("pics"), adminAuth, async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    quantity: req.body.quantity,
    category: req.body.category,
  });

  // if (!req.files) {
  //   res.send("No file chosen");
  // } else {
  //   var newImg = fs.readFileSync(req.file.path);
  //   var encodeImg = newImg.toString("base64");

  let newPic = [];
  if (req.files.length > 0) {
    newPic = req.files.map((file) => {
      return {
        img: {
          name: file.originalname,
          path: file.path,
          type: file.mimetype,
        },
      };
    });
  } else {
    res.status(400).send("No file chosen");
  }

  // var newPic = [{
  //   name: req.files.originalname,
  //   path: req.files.path,
  //   type: req.files.mimetype,
  // }];
  try {
    product.picture = newPic;
    const savedProduct = await product.save();
    await Category.updateMany({ $push: { products: savedProduct._id } });
    return res.send(savedProduct);
  } catch (err) {
    res.status(400).send(err);
  }
});

//read
router.get("/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json(error);
  }
});

//delete
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const delProd = await product.remove();
    res.status(200).send(`Product successfully deleted ${delProd}`);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
