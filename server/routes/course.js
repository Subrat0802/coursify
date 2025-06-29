const express = require("express");
const { createCourse, createSection } = require("../controllers/Course");
const { isUser, isInstructor } = require("../middleware/middleware");
const router = express.Router();

router.post("/createCourse",isUser, isInstructor, createCourse);
router.post("/createSection",isUser, isInstructor, createSection);

module.exports = router;