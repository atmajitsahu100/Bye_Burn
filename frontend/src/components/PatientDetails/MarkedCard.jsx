import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';

const MarkedCard = ({ id, name, image, onSelectImage }) => {

    
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
      <div className='flex flex-col justify-center items-center p-2 w-[22vh] h-full' onClick={() => handleEditClick(image)}>
            <img src={image} alt='' className='w-fit h-fit rounded-md'/> 
      </div>
  )
}

export default MarkedCard