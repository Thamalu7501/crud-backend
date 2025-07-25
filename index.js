require('dotenv').config(); // Load environment variables from .env file
const express = require('express')  // Importing express
const app = express()   // Creating an instance of express
const mongoose = require('mongoose')  // Importing mongoose
const productRoute = require('./routes/product.route'); // Importing product routes
const Product = require('./model/product.model')

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data


// Basic route to check if the server is running
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});


// 
app.get('/', (req, res) => {
    res.send("Hello From Node API Server")
});

// Product routes
app.use('/api/products', productRoute)


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected To Database !"); // Log a message when the connection is successful
    })
    .catch(() => {
        console.log("Connection Failed !"); // Log a message when the connection fails
    });