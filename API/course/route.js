const express = require("express");
const router = express.Router();

const {
    getCoursesList,
    getCourseById,
    deleteCourse,
    addCourse,
    updateCourse,
} = require("./controller");

// Get course list
router.get("/", getCoursesList);

// Get course by ID
router.get("/:courseId", getCourseById);

// Delete course
router.delete("/:courseId", deleteCourse);

// Add course
router.post("/", addCourse);

// Update course infrmation
router.put("/:courseId", updateCourse);

module.exports = router;
