const Product = require("../models/Product");


//Creating Product 
const createProduct = async (req, res) => {
    try {
      const { name, price, quantity, category } = req.body;
      const image = req.file ? req.file.path : "";

      const newProduct = new Product({
        name,
        price,
        quantity,
        category,
        image,
      });

      await newProduct.save();

      res.status(201).json({
        message: "Product added Successfully!",
        product: newProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(500);
        throw new Error( "Error in creating product");
    }
  };

  //Fetching created products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500);
      throw new Error("Error in fetching product");
  }
};

//Fetching created product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500);
      throw new Error("Error in fetching product by ID");
    }
};

//Deleting product by ID
const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Product deleted Successfully!",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500);
      throw new Error( "Error in deleting product");
    }
  };

const updateProduct = async (req, res) => {
    try {
      const { name, price, quantity, category } = req.body;

      const updateData = {
        name,
        price,
        quantity,
        category,
      };

      if (req.file) {
        updateData.image = req.file.path;
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        updateData,
        {
          new: true, //returns updated data
        },
      );

      res.status(200).json({
        message: "Product updated Successfully!",
        product: updatedProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(500);
      throw new Error( "Error in updating product");
    }
  };

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    deleteProduct,
    updateProduct
};
