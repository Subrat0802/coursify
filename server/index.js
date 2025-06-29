const express = require("express");
const app = express();
const dbconnect = require("./config/dbconnect");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const categoryRouter = require("./routes/category");
const courseRouter = require("./routes/course")
const {cloudinaryConnect} = require("./config/cloudinary");
const fileUpload = require("express-fileupload");

dbconnect.connect();

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true,
    }) 
)

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp"
    })
)

cloudinaryConnect();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/course", courseRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
    console.log(`App is running on PORT ${PORT}`);
})