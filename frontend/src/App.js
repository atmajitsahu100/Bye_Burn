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



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  console.log(isLoggedIn);

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
          <Route path="/" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />}/>
          {/* <Route path="/login" element={<LoginForm />} /> */}
          <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route path="/addnewpatient" element={<AddNewPatient/>} />
          <Route path="/humanmodel" element={<HumanModels />} />    
          <Route path="/patientdetails" element={<PatientDetails/>} />
          <Route path="/human" element={<HumanModel/>}/>
          <Route path="/buttons" element={<ButtonsPage />} />
      </Routes>
    </div>
  );
}

export default App;
