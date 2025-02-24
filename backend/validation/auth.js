const { check } = require("express-validator");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

const loginValidation = [
  check("email")
    .trim()
    .custom(async (value, { req }) => {
      try {
        const user = await User.findOne({ email: value }).select("+password");
        if (user) {
          const password = req.body.password;
          const check = await bcrypt.compare(password, user.password);
          if (check) {
            req.user = user;
            return true;
          }
        }
        throw new Error(`Login failed. Invalid credentials.`);
      } catch (err) {
        throw new Error(err.message);
      }
    }),
  check("password")
    .isLength({ min: 4 })
    .withMessage("Password must be at least 4 characters"),
];

module.exports = { loginValidation };
