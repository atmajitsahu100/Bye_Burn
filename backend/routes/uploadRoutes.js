const express = require("express");
const multer = require("multer");


const router = express.Router();
const uploadController = require('./../controllers/uploadController')


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post("/", upload.single("image"), uploadController.uploadImage);

module.exports = router;
