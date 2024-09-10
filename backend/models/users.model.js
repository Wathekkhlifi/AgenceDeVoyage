const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String, // String is shorthand for {type: String}
  lastName: String,
  password: String,
  email: { type: String, required: true, unique: true },
  phone: Number,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
