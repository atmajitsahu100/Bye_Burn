const User = require("../models/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");
const {TOKEN_KEY} = process.env;
require("dotenv").config();
const axios = require('axios');


// signup
module.exports.Signup = async (req, res, next) => {
  try {
    const {
      email,
      firstName,
      lastName,
      password,
      confirm_password,
      createdAt,
    } = req.body.formData;


    if (password === confirm_password) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }


      const hashedPassword = await bcrypt.hash(password, 12);

     // const username = email.split("@")[0];
      const user = await User.create({
        email,
        firstName,
        lastName,
        password : hashedPassword,
        createdAt,
      });
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        maxAge: 60 * 1000, // in sec
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(201)
        .json({ message: "User signed in successfully", success: true, user });
      next();
    } else {
      return res.json({ message: "Password not match" });
    }
  } catch (error) {
    console.error(error);
  }
};

// Login
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      maxAge: 6000 * 1000, // in sec
      withCredentials: true,
      httpOnly: false,
    });
    //const email = user.email;
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true, email });
    next();
  } catch (error) {
    console.error(error);
  }
};

// Login with Google *(not done)
module.exports.LoginWithGoogle = async (req, res, next) => {
  try {
    const { email, firstName, lastName } = req.body;
    if (!email) {
      return res.json({ message: "email is required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      // create new user and login
      const username = email.split("@")[0];
      const user = await User.create({
        email,
        username,
        firstName,
        lastName,
      });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      maxAge: 6000 * 1000, // in sec
      withCredentials: true,
      httpOnly: false,
    });
    //const email = user.email;
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true, email });
    next();
  } catch (error) {
    console.error(error);
  }
};
