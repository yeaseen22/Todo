const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  reset,
} = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotpassword);
router.route("/reset/:resetToken").post(reset);

module.exports = router;
