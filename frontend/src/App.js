import { Route, Routes } from "react-router-dom";
// import Signup from "./pages/Signup";
import Signup from "./components/SignUpDetails/SignUp";
// import LoginForm from "./pages/LoginForm";
import LoginForm from "./components/LoginDetails/LoginForm";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import AddNewPatient from './components/PatientDetails/AddNewPatient'
import PatientDetails from './components/PatientDetails/PatientDetails'
import HumanModels from "./components/HumanModels/HumanModels";
import HumanModel from "./pages/HumanModel";
import NavBar from "./pages/Navbar";
// import NavBar from "./components/NavBar.jsx/NavBar";
import { useState } from "react";
import PatientProfile from "./components/PatientDetails/PatientProfile";
import HumanBodyColoring from "./pages/HumanBodyColoring";
import MarkedImages from "./pages/MarkedImages";
import EditHumanModel from "./pages/EditHumanModel";
//import PatientDetails from "./components/PatientDetails/PatientDetails";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          {/* <Route path="/login" element={<LoginForm />} /> */}
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/addnewpatient" element={<AddNewPatient/>} />
          <Route path="/humanmodel" element={<HumanModels />} />    
          <Route path="/patient" element={<PatientDetails />} />    
            
          <Route path="/human" element={<HumanBodyColoring/>}/>
          <Route path="/patientdetails" element={<PatientDetails />} />
          <Route path="/patientprofile" element={<PatientProfile/>}/>
          <Route path="/markedimages" element={<MarkedImages/>}/>
          <Route path="/editimage" element={<EditHumanModel/>}/>
      </Routes>
    </div>
  );
}

export default App;
