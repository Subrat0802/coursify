const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(408).json({
        message: "All fields are required",
        success: false,
      });
    }

    const response = await Category.create({ name, description });
    if (!response) {
      return res.status(404).json({
        message: "Error while creating category",
        success: false,
      });
    }

    return res.status(200).json({
      message: "category created successfully",
      data: response,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error while creating category",
      success: false,
    });
  }
};

exports.getAllcategory = async (req, res) => {
  try {
    const response = await Category.find();
    if (!response) {
      return res.status(409).json({
        message: "Error while getting all categories",
        sucess: false,
      });
    }

    res.status(200).json({
      data: response,
      message: "All categories",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error while getting all category",
      success: false,
    });
  }
};
