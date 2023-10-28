const express = require("express");
const { loginUser, signupUser } = require("../controllers/userConteroller");
const router = express.Router();

// login router
router.post("/login", loginUser);

// signup router
router.post("/signup", signupUser);

module.exports = router;
