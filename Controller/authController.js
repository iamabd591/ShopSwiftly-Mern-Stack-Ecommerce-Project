const asynchandler = require("express-async-handler");
const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = asynchandler(async (req, res) => {
  try {
    const { name, email, password, confrimPassword, phone, address } = req.body;
    if (
      !name ||
      !email ||
      !password ||
      !confrimPassword ||
      !phone ||
      !address
    ) {
      res.status(400);
      throw new Error("All Fields Are Required");
      return;
    }
    if (password != confrimPassword) {
      throw new Error("Password And Confrim Password is Not Matched");
      return;
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      res.status(200).send({
        success: true,
        message: "Email Already Exist",
      });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      confrimPassword: hashedPassword,
      phone,
      address,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Error In Registration",
    });
  }
});
module.exports = { registerUser };
