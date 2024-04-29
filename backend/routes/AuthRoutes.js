const isAuthenticated = require("../middlewares/isAuthenticated")
const { Signup, Login} = require("../controllers/AuthController");
const {userVerification} = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

const {AddPatient, GetPatient}=require("../controllers/AddPatientController");
const { MarkedImage,getAllMarkedImages } = require("../controllers/SegmentController");
router.post("/addpatient",AddPatient);
router.get("/getpatient",GetPatient);
router.post("/signup", Signup);
router.post("/login",Login);
router.post('/',userVerification);
router.post("/markedimage", MarkedImage);
router.get("/allmarkedimages",getAllMarkedImages);


module.exports = router;