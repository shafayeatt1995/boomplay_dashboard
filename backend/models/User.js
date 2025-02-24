const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, index: true, lowercase: true },
    password: { type: String, required: true, select: false },
  },
  { strict: true }
);

UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  user.password = bcrypt.hashSync(user.password, 10);
  next();
});

module.exports = mongoose.model("User", UserSchema);
