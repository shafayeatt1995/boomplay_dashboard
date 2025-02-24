const express = require("express");
const { User } = require("../models");
const router = express.Router();

router.get("/profile", async (req, res) => {
  const { _id } = req.user;
  const user = await User.findOne({ _id });
  res.status(200).json({ success: true, user });
});

module.exports = router;
