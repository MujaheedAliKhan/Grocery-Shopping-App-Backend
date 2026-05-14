const Order = require("../models/Order");

const placeOrder = async (req, res) => {
    try {
    const {products, totalAmount, paymentMethod} = req.body;

    const newOrder = new Order ({
        user: req.user.id,
        products,
        totalAmount,
        paymentMethod
    });

    await newOrder.save();

    res.status(201).json({
        message: "Order Placed Successfully"
    });
    } catch (error) {
        console.log(error);

        res.status(500);

        throw new Error("Error placing order");
    }
};

const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({
            user:req.user.id,
        }).sort({createdAt: -1});

        res.json(orders);
    } catch (error) {
        console.log(error);
        res.json(500);
        throw new Error("Error in fetching orders");
    }
};

const cancelOrder = async (req, res) => {
    try {
        const orders = await Order.findOne({
            _id: req.params.id,
            user:req.user.id,
        });

        if (!orders) {
           return res.status(404).json({
                message: "Order not found"
           }); 
        }

        await Order.findByIdAndDelete(req.params.id);

        res.json({
            message: "Order Cancelled Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500);
        throw new Error("Error cancelling order");
    }
};

//Fetching All users Orders

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
        .populate("user", "name email")
        .sort({createdAt: -1});

        res.json(orders);
    } catch (error) {
        console.log(error);
        res.status(500);
        throw new Error("Error in fetching all orders");
    }
};

const updateOrderStatus = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("ID:", req.params.id);
    const { orderStatus } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    order.orderStatus = orderStatus;

    await order.save();

    res.json({
      message: "Order status updated",
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error("Error updating order status");
  }
};

module.exports = {placeOrder, getMyOrders, cancelOrder, getAllOrders, updateOrderStatus};