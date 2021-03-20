 const { University } = require("../../db/models");

 //Get uni List
 exports.getUniversityList = async (req,res) => {
     try {
         const university = await University.findAll();
         if (university) {
            res.status(200).json(university);
        } else {
          res.status(404).json({ message: " No students found" });
        }
      } catch (error) {
        res.status(500).json({ error: "Inernal servier error" });
      }   
 };

 //Get the uni by ID
 exports.getUniversityById = async (req,res) => {
    const {universityId} = req.params;
    try {
        const foundUniversity = await University.findByPk (universityId);
        if (foundUniversity) {
            res.status(200).json(foundUniversity);
          } else {
            res.status(404).json({ message: " The student was not found" });
          }
        } catch (error) {
          res.status(500).json({ error: "Inernal servier error" });
        }
 };

 // Delete the uni
exports.deleteUniversity = async (req, res) => {
    const { universityId } = req.params;
  
    try {
      const foundUniversity = await University.findByPk(universityId);
      if (foundUniversity) {
        await foundUniversity.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ message: " The student was not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Inernal servier error" });
    }
  };
  
  // Add student
  exports.addUniversity = async (req, res) => {
    try {
      const newUniversity = await University.create(req.body);
      if (newUniversity) {
        res.status(201).json(newUniversity);
      } else {
        res.status(406).json({ error: "new student could not be added" });
      }
    } catch (error) {
      res.status(500).json({ error: "Inernal servier error" });
    }
  };
  
  // Update student information
  exports.updateUniversity = async (req, res) => {
    const { universityId } = req.params;
    try {
      const updatedUniversity = await University.findByPk(universityId);
      if (updatedUniversity) {
        await updatedUniversity.update(req.body);
        res.status(204).end();
      } else {
        res.status(406).json({ error: "Student could not be updated" });
      }
    } catch (error) {
      res.status(500).json({ error: "Inernal servier error" });
    }
  };
  