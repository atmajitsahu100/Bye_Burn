import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import '../styles/markedimage.css';
import { useLocation } from 'react-router-dom';

function MarkedImages() {
    const [markedImages, setMarkedImages] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    let {patientId} = location.state || {};
    useEffect(() => {
        // Fetch marked images from backend when the component mounts
        const fetchMarkedImages = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/allmarkedimages/${patientId}`);
                setMarkedImages(response.data.data);
            } catch (error) {
                console.error('Error fetching marked images:', error);
            }
        };
        fetchMarkedImages();
    }, []);

    const handleEditClick = (image) => {
        // Calculate total pixel count (assuming imageData is a valid image URL)
        // Implement this function to calculate total pixels from image URL
    
        navigate(`/editimage`, {
          state: {
            imageData: image.imageData,
            totalPixels:image.totalPixels,
            patientId:patientId,
          },
        });
      };
    

    return (
        <div>
            <h1>Marked Images</h1>
            <div className="image-gallery">
                {markedImages.map((image, index) => (
                    <div key={index} className="image-container">
                        <img src={image.imageData} alt={`Marked Image ${index + 1}`} />
                        <button className="edit-button" onClick={() => handleEditClick(image)}>
                     Edit
                </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MarkedImages;
