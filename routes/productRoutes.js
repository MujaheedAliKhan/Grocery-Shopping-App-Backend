const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const upload = require("../middleware/upload");

const {
    createProduct,
    getProducts,
    getProductById,
    deleteProduct,
    updateProduct
} = require("../controllers/productControllers");

//Creating Product
router.post(
    "/", 
    authMiddleware, 
    adminMiddleware, 
    upload.single("image"),
    createProduct
);

//Get Products
router.get("/", getProducts);

//Get Products By ID
router.get("/:id", getProductById);

//Delete Product By ID
router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    deleteProduct);

//Update Product By ID
router.put(
    "/:id",
    authMiddleware,
    adminMiddleware,
    upload.single("image"),
    updateProduct
);

module.exports = router;