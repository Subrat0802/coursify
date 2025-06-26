const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  try {
    const { id } = req.user;
    const {
      title,
      description,
      whatYouWillLearn,
      price,
      thumbnail,
      Category,
      status,
    } = req.body;
  } catch (error) {}
};
