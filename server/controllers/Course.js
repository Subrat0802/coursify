const Category = require("../models/Category");
const Course = require("../models/Course");
const mongoose = require("mongoose");
const { uploadImageToCloudinary } = require("../utils/imageUpload");
const Section = require("../models/Section");
const User = require("../models/User");
const SubSection = require("../models/SubSection");
require("dotenv").config();

exports.createCourse = async (req, res) => {
  try {
    const { id } = req.user;
    const { title, description, whatYouWillLearn, price, category } = req.body;

    const thumbnail = req.files.thumbnailImage;

    if (!title || !description || !whatYouWillLearn || !price || !category) {
      return res.status(404).json({
        message: "All fields are required",
        success: false,
      });
    }

    const cat = new mongoose.Types.ObjectId(category);

    const checkCategory = await Category.findById(cat);

    if (!checkCategory) {
      return res.status(409).json({
        message: "Select right category",
        success: false,
      });
    }

    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );

    const response = await Course.create({
      title,
      instructor: id,
      description,
      whatYouWillLearn,
      price,
      thumbnail: thumbnailImage.secure_url,
      category: checkCategory._id,
      status: "Draft",
    });

    if (!response) {
      return res.status(404).json({
        message: "Error while creating your course part 1, Please try again.",
        success: false,
      });
    }

    const addCourseToUserCoursesSection = await User.findByIdAndUpdate(
      id,
      { $push: { courses: response._id } },
      { new: true }
    );

    return res.status(200).json({
      message: "Course created successfully",
      data: response,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error while creating course part 1",
      success: false,
      error: error.message || "Unknown error",
    });
  }
};

exports.createSection = async (req, res) => {
  try {
    const { id } = req.user;
    const { sectionName, courseId } = req.body;

    console.log("sectionName", sectionName);

    if (!sectionName) {
      return res.status(408).json({
        message: "Section name is required",
        success: false,
      });
    }

    const checkCourse = await Course.findById(courseId);

    if (!checkCourse) {
      return res.status(409).json({
        message: "Invalid Course id",
        success: false,
      });
    }

    const response = await Section.create({ sectionName });

    if (!response) {
      return res.status(404).json({
        message: "Error while creating section",
        success: false,
      });
    }

    checkCourse.courseContent.push(response._id);

    const saveCourse = await checkCourse.save();

    // const addSectioninCourse = await Course.findByIdAndUpdate(
    //   courseId,
    //   { $push: { courseContent: response._id } },
    //   { new: true }
    // );

    return res.status(200).json({
      message: "Section is created",
      data: response,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error while creating course part 1",
      success: false,
      error: error.message || "Unknown error",
    });
  }
};

exports.createSubSection = async (req, res) => {
  try {
    const { title, description, sectionId } = req.body;
    const videoUrl = req.files.videoUrl;
    console.log("Data", title, description, sectionId, videoUrl);

    if (!title || !description || !videoUrl || !sectionId) {
      return res.status(409).json({
        message: "All fields are required",
        success: false,
      });
    }

    const secId = new mongoose.Types.ObjectId(sectionId);

    const checkSection = await Section.findById(secId).populate("subSection");
    if (!checkSection) {
      return res.status(409).json({
        message: "Section is not valid, something went wrong. try again",
        success: false,
      });
    }

    const video = await uploadImageToCloudinary(
      videoUrl,
      process.env.FOLDER_NAME
    );

    console.log("video", video);

    const response = await SubSection.create({
      title,
      timeDuration: video.duration,
      description,
      videoUrl: video.secure_url,
    });

    checkSection.subSection.push(response._id);
    await checkSection.save();

    if (!response) {
      return res.status(407).json({
        message: "Error while creating course",
        success: false,
        data: response,
      });
    }

    res.status(200).json({
      message: "Video is uploaded successfully",
      data: response,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error while creating course part 2",
      success: false,
      error: error.message || "Unknown error",
    });
  }
};
exports.getAllCourse = async (req, res) => {
  try {
    const response = await Course.find()
      .populate("instructor")
      .populate("courseContent")
      .populate("category")
      .populate("studentEnrolled")
      .exec();

    if (!response || response.length === 0) {
      return res.status(404).json({
        message: "No courses found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "All courses fetched successfully.",
      success: true,
      data: response, // ✅ Return the actual courses
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error while getting all courses.",
      success: false,
      error: error.message,
    });
  }
};
