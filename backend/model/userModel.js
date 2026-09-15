const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // 1. Added missing require
const { userSchema } = require("../schemas/userSchema");

// 2. Added isModified check to avoid re-hashing hashed passwords on updates
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("user", userSchema);

module.exports = { User };