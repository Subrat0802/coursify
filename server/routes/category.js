const express = require("express");
const { createCategory, getAllcategory } = require("../controllers/Category");
const { isUser, isAdmin } = require("../middleware/middleware");
const router = express.Router();

router.post("/createCategory", isUser, isAdmin, createCategory);
router.get("/getAllCategory", getAllcategory);

module.exports = router;