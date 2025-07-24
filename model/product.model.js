const { Timestamp } = require('mongodb');   // Importing Timestamp from mongodb
const express = require('express');  // Importing express
const mongoose = require('mongoose'); // Importing mongoose

// Defining the Product schema
const ProductSchema = mongoose.Schema(
    {
        // Defining the fields for the Product schema

        name: {      // Product name
            type: String,   // String type
            required: [true, "Product Name is Required"] // Required field with custom error message
        },

        quantity: {  // Product quantity
            type: Number, // Number type
            required: true, // Required field
            default: 0 // Default value set to 0
        },

        price: { // Product price
            type: Number,
            required: true,
            default: 0
        },

        image: { // Product image URL
            type: String,
            required: false // Optional field
        }
    },
    {
        timestamps: true    // Adding timestamps
    }
);

// Creating the Product model
module.exports = mongoose.model("Product", ProductSchema);

