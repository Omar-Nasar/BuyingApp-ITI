var express = require("express");
var cors = require("cors");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var Product = require("./ProductModel");
var CartProduct = require("./CartProductModel");

//mongodb+srv://ITI:ITI2022@cluster0.vvkwpmb.mongodb.net/BuyingApp

//mongodb+srv://iti:ITI123@cluster0.vtoy0ia.mongodb.net/Buying
mongoose
  .connect("mongodb+srv://iti:ITI123@cluster0.vtoy0ia.mongodb.net/Buying")
  .then(() => {
    console.log("----------DB Connected----------");
  })
  .catch(() => {
    console.log("!!!Connection failed!!!");
  });

app.use(express.urlencoded({ extended: true }));
//app.use(express.json);
app.use(cors());

app.get("/cart", function (Request, Response) {
  CartProduct.find().then((data) => {
    Response.send(data);
  });
});

app.get("/apple", function (Request, Response) {
  Product.find({ company: "Apple" }).then((data) => {
    Response.send(data);
  });
});

app.get("/phone", function (Request, Response) {
  Product.find({ type: "Phone" }).then((data) => {
    Response.send(data);
  });
});

app.get("/samsung", function (Request, Response) {
  Product.find({ company: "Samsung" }).then((data) => {
    Response.send(data);
  });
});

app.get("/tv", function (Request, Response) {
  Product.find({ type: "TV" }).then((data) => {
    Response.send(data);
  });
});

app.get("/watches", function (Request, Response) {
  Product.find({ type: "watch" }).then((data) => {
    Response.send(data);
  });
});

app.get("/apple/phone", function (Request, Response) {
  Product.find({ company: "Apple", type: "Phone" }).then((data) => {
    Response.send(data);
  });
});

app.get("/samsung/phone", function (Request, Response) {
  Product.find({ company: "Samsung", type: "Phone" }).then((data) => {
    Response.send(data);
  });
});

app.get("/samsung/tv", function (Request, Response) {
  Product.find({ company: "Samsung", type: "TV" }).then((data) => {
    Response.send(data);
  });
});
app.get("/apple/watch", function (Request, Response) {
  Product.find({ company: "Apple", type: "watch" }).then((data) => {
    Response.send(data);
  });
});
app.get("/apple/headphones", function (Request, Response) {
  Product.find({ company: "Apple", type: "headphones" }).then((data) => {
    Response.send(data);
  });
});

app.get("/samsung/headphones", function (Request, Response) {
  Product.find({ company: "Samsung", type: "headphones" }).then((data) => {
    Response.send(data);
  });
});

// app.post("/samsung", function (Request, Response) {
//   console.log("TEST");
//   Product.find({ title: Request.body.productTitle }).then((data) => {
//     let insertedProduct = new CartProduct({
//       company: data[0].company,
//       title: data[0].title,
//       price: data[0].price,
//       image_path: data[0].image_path,
//       rating: data[0].rating,
//       isnew: data[0].isnew,
//       type: data[0].type,
//       color: data[0].color,
//       isvisible: data[0].isvisible,
//     });

//     insertedProduct.save().then(() => {
//       console.log("Inserted");
//     });
//   });
// });

// app.post('/insert', (req, res) => {
//   console.log(req.body);
//   let ProdCart = new CartProduct({
//     company: req.body.company,
//     title: req.body.title,
//     price: req.body.price,
//     image_path: req.body.image_path,
//     rating: req.body.rating,
//     isnew: req.body.isnew,
//     type: req.body.type,
//     color: req.body.color,
//     isvisible: req.body.isvisible
//   })

//   ProdCart.save().then(data => {
//     console.log("Inserted");
//     console.log(data);
//   }).catch(err => {
//     console.log("Not Added");
//   })

// })

app.listen(6900, function () {
  console.log("Example app listening...");
});
