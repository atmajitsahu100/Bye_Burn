import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router'
import axios from 'axios';

const ButtonsPage = () => {

    const navigate = useNavigate();
    const { patientId } = useParams(); 
    const [patientDetails, setPatientDetails] = useState(null);

    // useEffect(() => {
    //     if (patientId) {
    //         fetchPatientDetails(patientId);
    //     }
    // }, []);

    // const fetchPatientDetails = async (patientId) => {
    //     try {
    //         const response = await axios.get(`http://localhost:4000/patientdetails/${patientId}`);
    //         console.log(response.data);
    //         setPatientDetails(response.data);
    //         console.log(patientDetails);
    //     } catch (error) {
    //         console.error('Error fetching patient details:', error);
    //     }
    // };


    const clickHandler = () => {
        navigate(`/humanmodel`, { state: { patientId: patientId } });
    };

    const handlesavedmodels = ()=>{
        navigate(`/markedimages`,{state:{patientId: patientId }});
    }
    const handlepatientprofile = ()=>{
      
            navigate(`/patientprofile`, { state: { patientId: patientId } });
    }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-5/12 h-fit border-2 border-gray-200 rounded-md hover:shadow-lg p-2'>
            <div className='w-full flex flex-row justify-between items-center p-3 bg-slate-300 rounded-md mb-4'>
                <h1 className=' font-bold text-2xl'>For Estimation TBSA and TFR </h1>
                <button id='TBSA' className='hover:bg-red-500 mt-0' onClick={clickHandler} >Click Here</button>
            </div>
            <div className='w-full flex flex-row justify-between items-center p-3 bg-slate-300 rounded-md mb-4'>
                <h1 className=' font-bold text-2xl'>For Burn Classification</h1>
                <button className='hover:bg-red-500 mt-0' onClick={()=>navigate('/uploadimage')}>Click Here</button>
            </div>
            <div className='w-full flex flex-row justify-between items-center p-3 bg-slate-300 rounded-md mb-4'>
                <h1 className=' font-bold text-2xl'>For Burn Segmentation</h1>
                <button className='hover:bg-red-500 mt-0' onClick={()=>navigate('/uploadimage')}>Click Here</button>
            </div>
            <div className='w-full flex flex-row justify-between items-center p-3 bg-slate-300 rounded-md mb-4'>
                <h1 className=' font-bold text-2xl'>Show Saved Models</h1>
                <button className='hover:bg-red-500 mt-0' onClick={handlesavedmodels}>Click Here</button>
            </div>
            <div className='w-full flex flex-row justify-between items-center p-3 bg-slate-300 rounded-md '>
                <h1 className=' font-bold text-2xl'>Show patient profile</h1>
                <button className='hover:bg-red-500 mt-0' onClick={handlepatientprofile}>Click Here</button>
            </div>
        </div>
    </div>
  )
}

export default ButtonsPage
