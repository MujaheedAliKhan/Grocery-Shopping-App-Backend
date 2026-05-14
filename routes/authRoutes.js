const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const {register, login, getCurrentUser} = require("../controllers/authController");


//REGISTER ROUTE
router.post("/register", register);

//LOGIN
router.post("/login", login);

//Get Current User
router.get("/me", authMiddleware, getCurrentUser);

router.get("/test", async(req, res) => {
    throw new Error("Testing Error Middleware");
});


module.exports = router;
