const Jwt = require("jsonwebtoken");
const asynchandler = require("express-async-handler");
const userModel = require("../Models/userModel");
export const rquireSignIn = asynchandler(async (req, res, next) => {
  try {
    const decode = Jwt.verify(req.headers.authorization, process.env.JWT_TOKEN);
  } catch (e) {
    console.log(e);
  }
});
export const isAdmin = asynchandler(async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role != 1) {
      return res.status(401).send({
        success: false,
        message: "Un Authorize Access",
      });
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
  }
});
