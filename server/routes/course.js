const express = require("express");
const { createCourse, createSection, createSubSection, getAllCourse } = require("../controllers/Course");
const { isUser, isInstructor } = require("../middleware/middleware");
const router = express.Router();

router.post("/createCourse",isUser, isInstructor, createCourse);
router.post("/createSection",isUser, isInstructor, createSection);
router.post("/createSubSection",isUser, isInstructor, createSubSection);
router.get("/allCourses", getAllCourse);

module.exports = router;