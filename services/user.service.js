const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "We will rull";

const { User } = require("../models");

const createUser = async (payload) => {
  const salt = await bcrypt.genSalt(10);
  const secPassword = await bcrypt.hash(payload.password, salt);
  payload.password = secPassword;
  const user = await User.create(payload);
  const data = {
    user: { id: user.id },
  };
  const authToken = jwt.sign(data, JWT_SECRET);
  return authToken;
};

const authenticateUser = async (payload) => {
  const { email, password } = payload;

  const user = await User.findOne({ email });
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (user && passwordCompare) {
    const data = {
      user: { id: user.id },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    return authToken;
  } else {
    return "Please login with correct credentials.";
  }
};

const getUser = async (id) => {
  const user = await User.findById(id);
  return user;
};

const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  console.log("deletedUser", user);
  return user;
};
const updateUser = async (id, payload) => {
  const user = await User.findByIdAndUpdate(id, payload);
};

module.exports = {
  createUser,
  authenticateUser,
  getUser,
  deleteUser,
  updateUser,
};
