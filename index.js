const express = require('express')  // Importing express
const app = express()   // Creating an instance of express
const mongoose = require('mongoose')  // Importing mongoose
const Product = require('./model/product.model'); // Importing product model

// Middleware to parse JSON requests
app.use(express.json());


// Basic route to check if the server is running
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});


// Middleware to enable CORS
app.get('/', (req, res) => {
    res.send("Hello From Node API Server")
});


// Create a new product
app.post('/api/products', async (req, res) => {
    try {   // Validate the request body
        console.log(req.body);
        const product = await Product.create(req.body); // Create a new product using the Product model
        res.status(200).json(product); // Respond with the created product
    }
    catch (error) { // Handle any errors that occur during product creation
        res.status(500).json({ message: error.message }); // Respond with an error message
    }
});

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:mlUUXIWBStBZ7rzB@cruddb.ga8rwvy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CrudDB")
    .then(() => {
        console.log("Connected To Database !");
    })
    .catch(() => {
        console.log("Connection Failed !");
    });