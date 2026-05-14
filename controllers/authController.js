const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");


//REGISTER
const register =  async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    //check user exists are not
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }

    //hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create User
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await user.save();
    res.status(201).json({
      message: "User Registered Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error registering user",
    });
  }
};

//LOGIN
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      //check User
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          message: "User Not Found",
        });
      }
  
  
      //compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }
  
      //create token
      const token = generateToken(user._id, user.role);
      res.json({
        message: "Login Successfull",
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error logging in",
      });
    }
  };

//Get Current User

const getCurrentUser = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");

      res.json(user);
    } catch (error) {
      console.log(error);
      res.json(500);
      throw error("Error fetching user");
    }
};


module.exports = {register, login, getCurrentUser};