import React, { useState } from 'react';
//import humanModelImage from '../public/assets/b5_updated.png';
import '../styles/HumanModel.css';
import axios from 'axios';

function HumanModel() {
    const [segmentedAreas, setSegmentedAreas] = useState([]);
    const handleClick = async (event) => {
      const { offsetX, offsetY } = event.nativeEvent;
      try {
        const response = await axios.post("/http://localhost:4000/apii/segment", { x: offsetX, y: offsetY });
        setSegmentedAreas(response.data.segmentedAreas);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <div>
        <img
          src="/assets/b5_updated.png"
          alt="Human Model"
          onClick={handleClick}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        {segmentedAreas.map((area, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: area.top,
              left: area.left,
              width: area.width,
              height: area.height,
              backgroundColor: 'rgba(255, 0, 0, 0.5)', // Example color (red with 50% opacity)
              pointerEvents: 'none', // Make sure the area is not clickable
            }}
          />
        ))}
      </div>
    );
  }
  
  export default HumanModel;