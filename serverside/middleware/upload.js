const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("inside fileDestination", req.fileDestination);
    cb(null, req.fileDestination);
  },
  filename: (req, file, cb) => {
    req.originalname = file.originalname;
    cb(null, `${req.fileName}-${file.originalname}`);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

// let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = util.promisify(uploadFile);
