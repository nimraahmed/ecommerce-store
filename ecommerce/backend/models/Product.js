const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },

  picture: [
    {
      img: {
        name: {
          type: String,
        },
        path: {
          type: String,
        },
        type: {
          type: String,
        },
      },
    },
  ],

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    // required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
