const isAuthenticated = require("../middlewares/isAuthenticated")
const { Signup, Login} = require("../controllers/AuthController");
const {userVerification} = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

const {AddPatient, GetPatient}=require("../controllers/AddPatientController");

router.post("/addpatient",AddPatient);
router.get("/getpatient",GetPatient);
router.post("/signup", Signup);
router.post("/login",Login);
router.post('/',userVerification);

module.exports = router;