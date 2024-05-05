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
import UploadSegment from "./pages/UploadSegment";
//import PatientDetails from "./components/PatientDetails/PatientDetails";



function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // console.log(isLoggedIn);

  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<LoginForm/>}/>
          {/* <Route path="/login" element={<LoginForm />} /> */}
          {/* <Route path="/login" element={<LoginForm/>} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/addnewpatient" element={<AddNewPatient/>} />
          <Route path="/humanmodel" element={<HumanModels />} />    
          {/* <Route path="/patient" element={<PatientDetails />} />     */}
            
          <Route path="/human" element={<HumanBodyColoring/>}/>
          <Route path="/patientdetails" element={<PatientDetails />} />
          <Route path="/patientprofile" element={<PatientProfile/>}/>
          <Route path="/markedimages" element={<MarkedImages/>}/>
          <Route path="/editimage" element={<EditHumanModel/>}/>
          <Route path="/buttons/:patientId" element={<ButtonsPage />}/>
          <Route path="/uploadimage" element={<UploadImagePage />}/>
          <Route path="/uploadsegment" element={<UploadSegment />}/>
          
      </Routes>
    </div>
  );
}

export default App;
