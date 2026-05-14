const express = require("express");
const router = express.Router();

const { placeOrder, getMyOrders, cancelOrder, getAllOrders, updateOrderStatus } = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

//To place order
router.post("/",authMiddleware, placeOrder);

//To see order
router.get("/my-orders", authMiddleware, getMyOrders);

//To cancel order
router.put("/cancel/:id", authMiddleware, cancelOrder);

//To fetch all orders
router.get("/all", authMiddleware, authMiddleware, getAllOrders);

//To update Orders Status
router.put(
  "/status/:id",
  authMiddleware,
  adminMiddleware,
  updateOrderStatus
);

module.exports = router;