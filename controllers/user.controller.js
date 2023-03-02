const { userService } = require("../services");

module.exports.userSignUp = async (req, res) => {
  try {
    const payload = req.body;
    const response = await userService.createUser(payload);
    res.status(200).send({ authToken: response });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
};

module.exports.userSignIn = async (req, res) => {
  try {
    const payload = req.body;
    const response = await userService.authenticateUser(payload);
    res.status(200).send({ response });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
};

module.exports.getUserInfo = async (req, res) => {
  try {
    const user = res.locals.user;
    const response = await userService.getUser(user.id);
    res.status(200).send({ response: response });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const user = res.locals.user;
    const response = await userService.deleteUser(user.id);
    res.status(200).send({ response: response });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const payload = req.body;
    const user = res.locals.user;
    const response = await userService.updateUser(user.id, payload);
    res.status(200).send({ response: response });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
};
