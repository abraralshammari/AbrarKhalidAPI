//multer and storage
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "../media",
  filename: (req,file,cb) => {
    //three argument: req, uploaded file, and cb"callback func"
    cb(null, `${+new Date()}${file.originalname}`);
    //cb takes two arguments: err"set it to null" and the new name of the uploaded file
  },
});
const upload = multer ({
  storage,
});
module.exports = upload;