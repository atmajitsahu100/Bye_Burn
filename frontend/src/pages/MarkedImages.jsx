import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
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
            <div className='w-full h-full bg-white flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-between items-center gap-20 md:flex-row gap-y-2'>
                    <div className='m-3 h-12 px-3 border-4 border-dashed border-blue-700 rounded-lg'>
                        <h2 className='font-semibold text-3xl'>Marked Human Models</h2>
                    </div>
                </div>
                <div className='w-11/12 h-1 bg-blue-500 rounded-md items-center'></div>

                <div className='w-11/12 h-full m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 rounded-md p-2'>
                    {markedImages.map((image, index) => (
                        <div key={index} className=' relative inline-block mr-[10px]'>
                            <img src={image.imageData} alt={`Marked Image ${index + 1}`} className='m-2 p-2'/>
                            <button className=' absolute top-[5px] right-[5px] px-[12px] py-[10px] hover:shadow-md' onClick={() => handleEditClick(image)}>
                        Edit
                    </button>
                        </div>
                    ))}
                </div>
                {/* <div className='w-8/12 p-3 mb-4 flex justify-between'>
                    <button className='w-32 font-semibold'>Skip</button>
                    <button className='w-32 font-semibold'>Next</button>
                </div> */}
            </div>
        </div>
    );
}

export default MarkedImages;
