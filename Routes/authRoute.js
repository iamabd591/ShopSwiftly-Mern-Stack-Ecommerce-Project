const express = require("express");
const { registerUser, loginUser } = require("../Controller/authController");
const {rquireSignIn, isAdmin} = require('../Middleware/validateToken')
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;