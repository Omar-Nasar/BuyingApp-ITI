const mongoose = require('mongoose')
const ProductsSchema = mongoose.Schema({
  company: String,
  title: String,
  price: String,
  image_path: String,
  rating: Number,
  isnew: Boolean,
  type: String,
  color: String,
  isvisible: Boolean
})

module.exports = mongoose.model('products', ProductsSchema)//products