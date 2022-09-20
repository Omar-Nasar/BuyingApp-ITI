let express = require('express');
let mongoos = require('mongoose');
let cors = require('cors')
let app = express();

let Product = require('./Models/Products');
mongoos.connect('mongodb+srv://omar:asd123@cluster0.nfepxi1.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connected");
    })
    .catch(() => {
        console.log("Failed");
    })
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
    Product.find().then((data) => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    })
})

app.listen(3500, () => {
    console.log('Listinig...');
})

