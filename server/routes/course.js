const express = require("express");
const { createCourse, createSection, createSubSection, getAllCourse, buyCourse, makeCousrePublished } = require("../controllers/Course");
const { isUser, isInstructor, isStudent } = require("../middleware/middleware");
const router = express.Router();

router.post("/createCourse",isUser, isInstructor, createCourse);
router.post("/createSection",isUser, isInstructor, createSection);
router.post("/createSubSection",isUser, isInstructor, createSubSection);
router.get("/allCourses", getAllCourse);
router.post("/addCourseToStudentAccount",isUser, isStudent, buyCourse);
router.post("/makeCoursePublished", isUser, isInstructor, makeCousrePublished)

module.exports = router;