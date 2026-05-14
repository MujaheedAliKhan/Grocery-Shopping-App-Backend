const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },

    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required: true
        },
        name: String,
        price: Number,
        quantity: Number,
        image: String
    },
],
    totalAmount:{
        type:Number,
        required:true,
    },

    paymentMethod:{
        type:String,
        default: "Cash On Delivery",
    },

    orderStatus:{
        type: String,
        enum:["Processing", "Cancelled", "Delivered"],
        default: "Processing",
    },
},
    {
        timestamps:true
    }

);

module.exports = mongoose.model("Order", orderSchema);