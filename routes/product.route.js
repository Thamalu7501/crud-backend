const express = require('express');
const router = express.Router();
const Product = require('../model/product.model'); // Import the Product model
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controller/product.controller'); // ✅ Use controller, not itself

// Define product routes
router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
