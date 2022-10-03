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

app.listen(6900, function () {
  console.log("Example app listening...");
});
