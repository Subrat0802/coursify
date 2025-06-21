const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
    {
        gender:{
            type:String,
            enum:["Male", "Female", "Other"],
        },
        dateOfBirth:{
            type:Date,
        },
        about:{
            type:String,
        },
        phoneNumber:{
            type:Number,
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Profile", profileSchema);


