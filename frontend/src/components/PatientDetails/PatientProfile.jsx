import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../data';
import MarkedCard from './MarkedCard';
import { useLocation } from 'react-router-dom';
import Spinner from './Spinner';

const PatientProfile = () => {
    const [selected, setSelected] = useState(false);
    const [image, setImage] = useState(null);
    const [markedImages, setMarkedImages] = useState([]);
    const location = useLocation();
    const { patientId } = location.state || {};
    const [patientDetails, setPatientDetails] = useState(null);
    const[loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (patientId) {
            fetchPatientDetails(patientId);
        }
    }, [patientId]);
    useEffect(() => {
        // Fetch marked images from backend when the component mounts
        const fetchMarkedImages = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/allmarkedimages/${patientId}`);
                setMarkedImages(response.data.data);
            } catch (error) {
                console.error('Error fetching marked images:', error);
            }
            setLoading(false);
        };
        fetchMarkedImages();
    }, []);


    const fetchPatientDetails = async (patientId) => {
        try {
            const response = await axios.get(`http://localhost:4000/patientdetails/${patientId}`);
            setPatientDetails(response.data);
        } catch (error) {
            console.error('Error fetching patient details:', error);
        }
    };
    
    const models = patientDetails?.markedImages || [];
    

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
    };
    const shortenId = (id) => {
        return id.substring(0, 6); // Change 6 to the desired length
    };
  
    return (
        <div className=' flex flex-col w-full h-screen'>
            <div className=' w-full bg-white p-2 rounded-md'>
                <h1 className='text-2xl text-center font-semibold bg-slate-200 rounded-md p-2'>Patient Profile</h1> 
            </div>
            <div className=' w-full h-[50%] p-3 flex flex-row items-center justify-between'>
                <div className=" w-full h-full bg-slate-200 p-4 rounded-md hover:shadow-md">
                    <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2">
                        {patientDetails && (
                            <>
                                <p className="text-xl text-gray-600 uppercase"><span className="font-bold text-black">Patient Id:</span> {(shortenId(patientId))}</p>
                                <p className="text-xl text-gray-600 uppercase"><span className="font-bold text-black">Patient Name:</span> {patientDetails.firstName} {patientDetails.lastName}</p>
                                <p className="text-xl text-gray-600 uppercase"><span className="font-bold text-black">Age:</span> {patientDetails.age} </p>
                                <p className="text-xl text-gray-600 uppercase"><span className="font-bold text-black">Gender:</span> {patientDetails.gender} </p>
                                <p className="text-xl text-gray-600 uppercase"><span className="font-bold text-black">Weight:</span> {patientDetails.weight} </p>
                                <p className="text-xl text-gray-600 uppercase"><span className="font-bold text-black">Contact:</span> {patientDetails.mobile} </p>
                            </>
                        )}
                    </div>
                </div>
                <div className='w-1/2 h-full p-3 m-2 rounded-md flex flex-row justify-between'>
                    <div className=' w-full flex flex-col'>
                        {/* <div className=' w-fit p-4 pt-2 flex flex-row'>
                            <label className="block mt-2 mr-2 text-xl font-medium text-gray-900 dark:text-white " htmlFor="file_input">Upload</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer
                            bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" 
                            onChange={handleFileChange}
                            />
                        </div> */}
                        <div className='min-w-full space-x-14 '>
                            {/* <button className='font-semibold w-1/3 '>Upload</button> */}
                            {/* <button className='font-semibold w-1/3'>Preview</button> */}
                        </div>
                    </div>
                    {/* {selected === true ? 
                        (<img src={image} alt='Image' className='rounded-lg'/>) : 
                        (
                            <div className=' w-[40%] h-full flex justify-center items-center rounded-lg text-gray-800 bg-slate-200'>No Image Selected Yet.</div>
                        )
                    } */}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-[98%] h-1 bg-blue-700 rounded-md items-center'></div>
            </div>
            <div className=' w-full h-100vh flex flex-col m-2 p-3'>
                <div className=' w-full bg-white p-2 rounded-md'>
                    <h1 className='text-2xl text-center font-semibold bg-slate-200 rounded-md p-2'>Patient Model Marked</h1> 
                </div>
                <div className='w-full h-full m-2 bg-blue-50 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 rounded-md p-2'>
                {markedImages && markedImages.map((image, index) => (
                    <div className=' bg-white h-[50vh] flex justify-center items-center shadow-blue-500 rounded-md hover:shadow-lg'>
                        {
                            loading ? (<Spinner />) : 
                            (<MarkedCard key={index}  patientId={patientId} {...image} />)
                        }
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default PatientProfile
