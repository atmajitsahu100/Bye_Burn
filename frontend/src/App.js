import { Route, Routes } from "react-router-dom";
// import Signup from "./pages/Signup";
import Signup from "./components/SignUpDetails/SignUp";
// import LoginForm from "./pages/LoginForm";
import LoginForm from "./components/LoginDetails/LoginForm";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import AddNewPatient from './components/PatientDetails/AddNewPatient'
import HumanModels from "./components/HumanModels/HumanModels";



function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          {/* <Route path="/login" element={<LoginForm />} /> */}
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/addnewpatient" element={<AddNewPatient/>} />
          <Route path="/humanmodel" element={<HumanModels />} />
      </Routes>
    </div>
  );
}

export default App;
