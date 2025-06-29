const express = require("express");
const { createCourse } = require("../controllers/Course");
const { isUser, isInstructor } = require("../middleware/middleware");
const router = express.Router();

router.post("/createCourse",isUser, isInstructor, createCourse);

module.exports = router;