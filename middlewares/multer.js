const multer = require('multer');
const path = require('path');

const IMAGE_DIRECTORY = './assets/images'

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, IMAGE_DIRECTORY);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadMulter = multer({ storage: diskStorage }).single("photo")
  
module.exports = uploadMulter;
