const express = require("express");

const app = express();

app.listen(3000, (req, res) => {
    console.log(`App is running on PORT 3000`)
})