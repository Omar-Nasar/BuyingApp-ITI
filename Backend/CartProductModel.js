const mongoose = require("mongoose");
const CartProductsSchema = mongoose.Schema({
  company: String,
  title: String,
  price: String,
  image_path: String,
  rating: Number,
  isnew: Boolean,
  type: String,
  color: String,
  isvisible: Boolean
});

module.exports = mongoose.model("cart", CartProductsSchema); //cart
