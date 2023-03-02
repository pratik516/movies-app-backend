const express = require("express");
const { user } = require("../controllers");
const { userAuth } = require("../middleware");
const router = express.Router();

router.post("/signUp", user.userSignUp);

router.post("/signIn", user.userSignIn);

router.post("/getUser", userAuth.userAuth, user.getUserInfo);

router.delete("/deleteUser", userAuth.userAuth, user.deleteUser);

router.put("/updateUser", userAuth.userAuth, user.updateUser);

module.exports = router;
