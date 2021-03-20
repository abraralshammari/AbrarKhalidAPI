const express = require("express");
const router = express.Router();


const {
    getUniversityList,
    getUniversityById,
    deleteUniversity,
    addUniversity,
    updateUniversity
} = require("./controller");


//Get uni List
router.get("/", getUniversityList);

//Get uni by id
router.get("/:universityId", getUniversityById);

//Delete uni
router.delete("/:universityId", deleteUniversity);

//add uni
router.post("/", addUniversity);

//update uni
router.put("/:universityId", updateUniversity);

module.exports = router;
