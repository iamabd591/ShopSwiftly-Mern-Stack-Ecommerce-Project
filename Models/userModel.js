const mongoose = require("mongoose");

const UserModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter User Name"],
      trim:true
    },
    email: {
      type: String,
      required: [true, "Please Enter a User Email"],
      unique: [true, "Email ALrady Exixt"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    phone: {
      type: String,
      required: [true, "Phone Number is Required"],
    },
    address: {
      type: String,
      required: [true, "User Address is Required"],
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("user", UserModel);
