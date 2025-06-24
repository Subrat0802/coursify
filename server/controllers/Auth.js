const mongoose = require("mongoose");
const User = require("../models/User");
const Profile = require("../models/Profile");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

exports.signup = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      accountType,
    } = req.body;

    // console.log("accountType", accountType);
    if (
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !confirmPassword ||
      !accountType
    ) {
      return res.status(408).json({
        message: "All fields are required",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(408).json({
        message: "User is already exist, Try with different email",
        success: false,
      });
    }

    if (password !== confirmPassword) {
      return res.status(408).json({
        message: "Password and confirm password does not match.",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const addProfileData = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      phoneNumber: null,
    });

    const response = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      accountType,
      additionalDetails: addProfileData._id,
      image: `${
        "https://api.dicebear.com/5.x/initials/svg?seed=" +
        firstname +
        " " +
        lastname
      }`,
    });

    res.status(200).json({
        message:"User registered successfully",
        success:true,
        response
    })

    res.statu
  } catch (error) {
    return res.status(500).json({
      message: "Server error while signup.",
      success: false,
      
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(409).json({
        message: "All fields are required.",
      });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.statsu(408).json({
        message: "Invalid user, Please signup fisrt.",
        success: false,
      });
    }

    const comaprePassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!comaprePassword) {
      return res.status(408).json({
        message: "Incorrect password, Try again.",
        success: false,
      });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        accountType: existingUser.accountType,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    existingUser.token = token;
    existingUser.password = undefined;

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httplOnly: true,
    };

    res.cookie("token", token, options).status(200).json({
      success: true,
      user: existingUser,
      message: "User signin successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error while signin.",
      success: false,
    });
  }
};
