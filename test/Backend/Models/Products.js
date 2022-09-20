let mongoose = require('mongoose')
let ProductSchema = mongoose.Schema({
    company: String,
    name: String,
    price: String,
    image_path: String,
    rating: Number,
    isnew: Boolean,
    details: {
        type: String,
        color: String,
    },
    isvisible: Boolean
})
module.exports = mongoose.model("Product", ProductSchema)