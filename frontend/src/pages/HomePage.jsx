import React, { useEffect } from 'react';
import "../styles/HomePage.css";
import PatientDetails from '../components/PatientDetails/PatientDetails';

const HomePage = () => {
    const handleLogout = () => {
     
      console.log("Logged out");
    };
  
    return (
      <div>
        <nav className="navbar">
          <div className="logo">Logo</div>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </nav>
        <div className="button-row-container">
          <div className="button-row">
            <button className="button">Button 1</button>
            <button className="button">Button 2</button>
            <button className="button">Button 3</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;