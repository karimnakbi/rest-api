const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  address: addressSchema,
});

module.exports = mongoose.model("user", userSchema);