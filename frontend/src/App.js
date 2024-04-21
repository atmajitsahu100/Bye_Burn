import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import LoginForm from "./pages/LoginForm";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import HumanModel from "./pages/HumanModel";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/human" element={<HumanModel/>}/>
      </Routes>
    </div>
  );
}

export default App;
