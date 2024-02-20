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
    const newUser = await new userModel({
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
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Registration",
    });
  }
});

const loginUser = asynchandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || password) {
      res.status(400);
      throw new Error("Both Email And Password are Required");
      return;
    }
    const userExist = await userModel.findOne({ email });
    if (!userExist) {
      return res.status(404).send({
        sucesss: false,
        message: "User Is Not Register",
      });
    }
    if (userExist) {
      const password_Match = await bcrypt.compare(password, userExist.password);
      if (!password_Match) {
        return res.status(201).send({
          success: false,
          message: "Invalid Password",
        });
      }
      const token = await jwt.sign({ _id: user._id }, process.env.JWT_TOKEN, {
        expiresIn: "5d",
      });
      return res.status(200).send({
        sucesss: true,
        message: "Sucessfully Login",
        userExist: {
          name: userExist.name,
          email: userExist.email,
          phone: userExist.phone,
          address: user.address,
        },
        token,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({
      sucess: false,
      message: "Error In Login",
    });
  }
});
module.exports = { registerUser,loginUser };
