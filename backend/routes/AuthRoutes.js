const isAuthenticated = require("../middlewares/isAuthenticated")
const { Signup, Login} = require("../controllers/AuthController");
const {userVerification} = require("../middlewares/AuthMiddleware");
const router = require("express").Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploadController = require('./../controllers/uploadController')
const {UploadSegment} =require('../controllers/UploadSegmentController')

const {AddPatient, GetPatient , PatientDetails}=require("../controllers/AddPatientController");
const { MarkedImage,getAllMarkedImages } = require("../controllers/SegmentController");
router.post("/addpatient",AddPatient);
router.get("/getpatient",GetPatient);
router.post("/signup", Signup);
router.post("/login",Login);
router.post('/',userVerification);
router.post("/markedimage", MarkedImage);
router.get("/allmarkedimages/:patientId",getAllMarkedImages);
router.post("/upload", upload.single("image"),uploadController.uploadImage);
router.post("/uploadandsegment", upload.single("image"),UploadSegment);
router.get("/patientdetails/:patientId",PatientDetails);

module.exports = router;