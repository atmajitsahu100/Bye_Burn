import { Route, Routes } from "react-router-dom";
// import Signup from "./pages/Signup";
import Signup from "./components/SignUpDetails/SignUp";
// import LoginForm from "./pages/LoginForm";
import LoginForm from "./components/LoginDetails/LoginForm";
import HomePage from "./pages/HomePage";
import AddNewPatient from './components/PatientDetails/AddNewPatient'
import PatientDetails from './components/PatientDetails/PatientDetails'
import HumanModels from "./components/HumanModels/HumanModels";
import HumanModel from "./pages/HumanModel";
import NavBar from "./pages/Navbar";
import ButtonsPage from './components/ButtonsPage/ButtonsPage'
import { useState } from "react";
import PatientProfile from "./components/PatientDetails/PatientProfile";
import HumanBodyColoring from "./pages/HumanBodyColoring";
import MarkedImages from "./pages/MarkedImages";
import EditHumanModel from "./pages/EditHumanModel";
import UploadImagePage from "./pages/UploadImagePage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import UploadSegment from "./pages/UploadSegment";
//import PatientDetails from "./components/PatientDetails/PatientDetails";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
          <Route path="/" element={<LoginForm setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage isLoggedIn={isLoggedIn}/>} />
          <Route path="/addnewpatient" element={<AddNewPatient/>} />
          <Route path="/humanmodel" element={<HumanModels />} />    
            
          <Route path="/human" element={<HumanBodyColoring/>}/>
          <Route path="/patientdetails" element={<PatientDetails />} />
          <Route path="/patientprofile" element={<PatientProfile/>}/>
          <Route path="/markedimages" element={<MarkedImages/>}/>
          <Route path="/editimage" element={<EditHumanModel/>}/>
          <Route path="/buttons/:patientId" element={<ButtonsPage />}/>
          <Route path="/uploadimage" element={<UploadImagePage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/uploadsegment" element={<UploadSegment />}/>
          
      </Routes>
    </div>
  );
}

export default App;
