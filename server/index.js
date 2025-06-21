const express = require("express");
const app = express();
const dbconnect = require("./config/dbconnect");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const cookieParser = require("cookie-parser");
// const cors = require("cors");

dbconnect.connect();

app.use(express.json());
app.use(cookieParser())
// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         credentials:true,
//     })
// )


app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 4000;


app.listen(PORT, (req, res) => {
    console.log(`App is running on PORT 3000`)
})