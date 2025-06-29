const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"User"
  },
  whatYouWillLearn: {
    type: String,
    required: true,
  },
  ratingAndReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"RatingAndReview"
    },
  ],
  courseContent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
  ],
  price:{
    type:Number,
    required:true
  },
  thumbnail:{
    type:String,
    required:true
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category"
  },
  studentEnrolled:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }],
  status:{
    type:String,
    enum:["Draft", "Published"]
  }
});

module.exports = mongoose.model("Course", courseSchema);
