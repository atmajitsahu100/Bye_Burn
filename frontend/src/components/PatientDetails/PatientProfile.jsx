import React, { useState } from 'react'
import data from '../data';
import MarkedCard from './MarkedCard';
const PatientProfile = () => {

    const [selected, setSelected] = useState(false);
    const [image, setImage] = useState(null);

    const models = data;

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result);
          };
          //reader.readAsDataURL(file);
          console.log(image);
        }
    };
  
    return (
    
        <div className=' flex flex-col w-full h-screen'>
            <div className=' w-full bg-white p-2 rounded-md'>
                    <h1 className='text-2xl text-center font-semibold bg-slate-200 rounded-md p-2'>Pateint Profile</h1> 
            </div>
            <div className=' w-full h-[40%] p-3 flex flex-row items-center justify-between'>
                        {/* Left part */}
                        <div className=" w-1/2 h-full bg-slate-200 p-4 rounded-md hover:shadow-md">
                            <div className="grid grid-cols-2 gap-y-2">
                                <p className="text-lg text-gray-600"><span className="font-bold text-black">Patient Id:</span> 1</p>
                                <p className="text-lg text-gray-600"><span className="font-bold text-black">Patient Name:</span> ABC</p>
                                <p className="text-lg text-gray-600"><span className="font-bold text-black">Age:</span> 20</p>
                                <p className="text-lg text-gray-600"><span className="font-bold text-black">Gender:</span> M</p>
                                <p className="text-lg text-gray-600"><span className="font-bold text-black">Weight:</span> 63</p>
                                <p className="text-lg text-gray-600"><span className="font-bold text-black">Contact:</span> 9234802085</p>
                                {/* <p className="text-lg text-gray-600"><span className="font-bold text-black">Burn-Degree:</span> 2<sup>o</sup></p>
                                <p className="text-lg text-gray-600"><span className="font-bold text-black">Previous Disease:</span> Malaria </p> */}

                            </div>
                        </div>
                        {/* For right side part */}
                        <div className='w-1/2 h-full p-3 m-2 rounded-md flex flex-row justify-between'>
                            <div className='flex flex-col'>
                                <div className=' w-full p-4 pt-2 flex flex-row'>
                                    <label class="block mt-2 mr-2 text-md font-medium text-gray-900 dark:text-white " for="file_input">Upload</label>
                                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer
                                    bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 
                                    dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" 
                                    onChange={handleFileChange}
                                    />
                                </div>
                                <div className=' w-[97%] flex flex-row justify-end space-x-14'>
                                    <button className='font-semibold w-1/3 '>Upload</button>
                                    <button className='font-semibold w-1/3'>Preview</button>
                                </div>
                            </div>
                            {   selected === true ? 
                                (<img src={image} alt='Image' className='rounded-lg'/>) : 
                                (
                                    <div className=' w-[40%] h-full flex justify-center items-center rounded-lg text-gray-800 bg-slate-200'>No Image Selected Yet.</div>
                                )
                            }
                        </div>
            </div>
            
        <div className='flex justify-center items-center'>
            <div className='w-[98%] h-1 bg-blue-700 rounded-md items-center'></div>
        </div>
            
            {/* Lower Part */}
            
            <div className=' w-full h-100vh flex flex-col m-2 p-3'>
                <div className=' w-full bg-white p-2 rounded-md'>
                    <h1 className='text-2xl text-center font-semibold bg-slate-200 rounded-md p-2'>Pateint Model Marked</h1> 
                </div>
                
                <div className='w-full h-full m-2 bg-blue-50 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 rounded-md p-2'>
                    {
                        models.map((model) => (
                            <div className=' bg-white h-[50vh] flex justify-center items-center shadow-blue-500 rounded-md hover:shadow-lg'>
                                <MarkedCard key={model.id} {...model} />
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
  )
}

export default PatientProfile