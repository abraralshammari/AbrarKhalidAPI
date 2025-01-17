const { Student } = require("../../db/models");

// Get the students list
exports.getStudentsList = async (req, res) => {
  try {
    const students = await Student.findAll();
    if (students) {
      res.status(200).json(students);
    } else {
      res.status(404).json({ message: " No students found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Inernal servier error" });
  }
};

// Get the student by his ID
exports.getStudentById = async (req, res) => {
  const { studentId } = req.params;

  try {
    const foundStudent = await Student.findByPk(studentId);
    if (foundStudent) {
      res.status(200).json(foundStudent);
    } else {
      res.status(404).json({ message: " The student was not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Inernal servier error" });
  }
};

// Delete the student
exports.deleteStudent = async (req, res) => {
  const { studentId } = req.params;

  try {
    const foundStudent = await Student.findByPk(studentId);
    if (foundStudent) {
      await foundStudent.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: " The student was not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Inernal servier error" });
  }
};

// Add student
exports.addStudent = async (req, res) => {
  try {
    //http:// (we will get the protocol and host from the request, 
    //followed by the name of the image from req.file.)
    if (req.file) {
    req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const newStudent = await Student.create(req.body);
    if (newStudent) {
      res.status(201).json(newStudent);
    } else {
      res.status(406).json({ error: "new student could not be added" });
    }
  } catch (error) {
    res.status(500).json({ error: "Inernal servier error" });
  }
};

// Update student information
exports.updateStudent = async (req, res) => {
  const { studentId } = req.params;
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
      }
    const updatedStudent = await Student.findByPk(studentId);
    if (updatedStudent) {
      await updatedStudent.update(req.body);
      res.status(204).end();
    } else {
      res.status(406).json({ error: "Student could not be updated" });
    }
  } catch (error) {
    res.status(500).json({ error: "Inernal servier error" });
  }
};
