const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const chatbotRoute = require("./routes/chatbotRoute");


//Middlewares
const {notFound, errorHandler} = require("./middleware/errorMiddleware");
const allowedOrigin = [
  "http://localhost:3000/",
  "http://grocery-shopping-app-frontend.vercel.app/"
]

app.use(cors({
  origin: allowedOrigin,
  credentials:true
})); //This will help to communicate Allow Access Origin
app.use(express.json()); //It accepts the Json data later
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);
app.use("/api/chatbot", chatbotRoute);

connectDB();

app.use(notFound);
app.use(errorHandler);

//Handles GET request
app.get("/", (req, res) => {
  res.send("Server is running on 5000");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on 3000");
});
