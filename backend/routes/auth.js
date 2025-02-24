const express = require("express");
const router = express.Router();
const { loginValidation } = require("../validation/auth");
const { validation } = require("../validation");
const jwt = require("jsonwebtoken");

router.post("/login", loginValidation, validation, async (req, res) => {
  try {
    const { _id, name, email } = req.user;
    const payload = { _id, name, email };

    const token = jwt.sign(payload, process.env.AUTH_SECRET, {
      expiresIn: "30 days",
    });

    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Something wrong. Please try again" });
  }
});
router.get("/logout", async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Something wrong. Please try again" });
  }
});

module.exports = router;
