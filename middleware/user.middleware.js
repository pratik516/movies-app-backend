const jwt = require("jsonwebtoken");
const JWT_SECRET = "We will rull";

const userAuth = (req, res, next) => {
  const token =
    req.headers.authorization?.split(" ")[1] ||
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({
      status: "Error",
      error: "A token is required for authentication",
    });
  }
  try {
    console.log("token", token, "JWT_SECRET", JWT_SECRET);
    console.log("userAuthCalled");
    const data = jwt.verify(token, JWT_SECRET);
    console.log("data", data);
    res.locals.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token." });
  }
};

module.exports = { userAuth };
