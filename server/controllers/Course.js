const Category = require("../models/Category");
const Course = require("../models/Course");
const mongoose = require("mongoose");
const { uploadImageToCloudinary } = require("../utils/imageUpload");
require("dotenv").config();

exports.createCourse = async (req, res) => {
  try {
    const { id } = req.user;
    const { title, description, whatYouWillLearn, price, category } = req.body;

    console.log(title, description, whatYouWillLearn, price, category);

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
