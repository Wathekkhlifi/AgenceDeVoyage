const UserModel = require("../models/users.model");

const createUser = async (req, res, next) => {
  const newUser = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
  });
  const mongoResponse = await newUser.save();
  res.status(201).json(newUser);
};

module.exports = {
  createUser,
};
