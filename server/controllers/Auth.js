const mongoose = require("mongoose");
const User = require("../models/User");
const Profile = require("../models/Profile");
const bcrypt = require("bcrypt")


exports.signup = async(req, res) => {
    try{
        const {firstname, lastname, email, password, confirmPassword, accountType} = req.body;
        if(!firstname || !lastname || !email || !password || !confirmPassword || !accountType){
            return res.status(408).json({
                message:"All fields are required",
                success:false
            })
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(408).json({
                message:"User is already exist, Try with different email",
                success:false
            })
        }

        if(password !== confirmPassword){
            return res.status(408).json({
                message:"Password and confirm password does not match.",
                success:false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const addProfileData = await Profile.create({
            gender:null,
            dateOfBirth: null,
            about: null,
            phoneNumber: null
        })

        const response = await User.create({
            firstname,
            lastname,
            email,
            password:hashedPassword,
            accountType,
            additionalDetails:addProfileData._id,
            image:`${"https://api.dicebear.com/5.x/initials/svg?seed="+firstname+" "+lastname}`
        })

    }catch(error){
        return res.status(500).json({
            message:"Server error while signup.",
            success:false
        })
    }
}


exports.signin = async(req, res) => {
    try{
        
    }catch(error){

    }
}