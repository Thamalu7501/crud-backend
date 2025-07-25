const Product = require('../model/product.model');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // Find all products using the Product model
        res.status(200).json(products); // Respond with the found products
    } catch (error) {
        res.status(500).json({ message: error.message }); // Respond with an error message
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params; // Extract the product ID from the request parameters
        const product = await Product.findById(id); // Find the product by ID using the Product model
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    try {   // Validate the request body
        console.log(req.body);
        const product = await Product.create(req.body); // Create a new product using the Product model
        res.status(200).json(product); // Respond with the created product
    }
    catch (error) { // Handle any errors that occur during product creation
        res.status(500).json({ message: error.message }); // Respond with an error message
    }
};


const updateProduct = async (req, res) => {
    try {
        const { id } = req.params; // Extract the product ID from the request parameters
        const product = await Product.findByIdAndUpdate(id, req.body); // Update the product by ID using the Product model
        if (!product) {
            return res.status(404).json({ message: "Product not found" }); // Respond with an error if the product is not found
        }
        const updatedProduct = await Product.findById(id); // Find the updated product
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; // Extract the product ID from the request parameters
        const product = await Product.findByIdAndDelete(id); // Delete the product by ID using the Product model
        if (!product) {
            return res.status(404).json({ message: "Product not found" }); // Respond with an error if the product is not found
        }
        res.status(200).json({ message: "Product deleted successfully" }); // Respond with a success message
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};