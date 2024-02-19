const express = require("express");
const registerController = require('../Controller/authController').default
const Router = express.Router();
Router.post('/register',registerController)

export default Router