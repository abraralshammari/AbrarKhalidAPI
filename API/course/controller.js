const { Course } = require("../../db/models");

// Get the course list
exports.getCoursesList = async (req, res) => {
  try {
    const courses = await Course.findAll();
    if (courses) {
      res.status(200).json(courses);
    } else {
      res.status(404).json({ message: " No students found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Inernal servier error" });
  }
};

// Get the course\ by his ID
exports.getCourseById = async (req, res) => {
  const { courseId } = req.params;

  try {
    const foundCourse = await Courses.findByPk(coursesId);
    if (foundCourses) {
      res.status(200).json(foundCourses);
    } else {
      res.status(404).json({ message: " The student was not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Inernal servier error" });
  }
};

// Delete the student
exports.deleteCourse = async (req, res) => {
  const { courseId } = req.params;

  try {
    const foundCourses = await Course.findByPk(courseId);
    if (foundCourses) {
      await foundCourses.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: " The student was not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Inernal servier error" });
  }
};

// Add student
exports.addCourse = async (req, res) => {
  try {
    const newCourses = await Courses.create(req.body);
    if (newCourses) {
      res.status(201).json(newCourses);
    } else {
      res.status(406).json({ error: "new student could not be added" });
    }
  } catch (error) {
    res.status(500).json({ error: "Inernal servier error" });
  }
};

// Update student information
exports.updateCourse = async (req, res) => {
  const { courseId } = req.params;
  try {
    const updatedCourses = await Course.findByPk(courseId);
    if (updatedCourses) {
      await updatedCourses.update(req.body);
      res.status(204).end();
    } else {
      res.status(406).json({ error: "Student could not be updated" });
    }
  } catch (error) {
    res.status(500).json({ error: "Inernal servier error" });
  }
};
