const express = require("express");
const { signup, signin, getUser } = require("../controllers/Auth");
const { isUser } = require("../middleware/middleware");
const router = express.Router();

router.post("/signup", signup)

router.post("/signin", signin)

router.get("/getUser", isUser, getUser)

module.exports = router;
