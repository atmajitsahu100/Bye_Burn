import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import axios from 'axios';

import Card from './Card';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const PatientDetails = () => {
    
    const navigate = useNavigate();

    const [models, setModels] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    
    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/getpatient?search=${searchQuery}`);
                setModels(response.data.patients);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchPatients();
    }, [searchQuery]);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const clickHandler = () => {
      console.log("Clicked");
  };

    return (
        <div>
            <div className="bg-white p-5 h-full">
                <div className='flex justify-center w-full'>
                    <h1 className="w-fit px-3 py-1 text-2xl font-bold leading-tight tracking-tight 
                    text-gray-900 md:text-1xl dark:text-white text-center border-dashed border-4 
                    rounded-lg border-blue-900 sm:w-[30%]">Patient Details</h1>
                </div>
                <div className='h-fit flex flex-col justify-between m-5 sm:flex-row sm:items-center gap-2'>
                    <div className="xl:w-96 flex items-center justify-center">
                        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                className="relative m-0 block flex-auto rounded-md border border-solid
                                border-neutral-400 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal 
                                leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]
                                focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] 
                                focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 
                                dark:focus:border-primary"
                                placeholder="Search Previous Patient"
                                aria-label="Search"
                                aria-describedby="button-addon2"
                                value={searchQuery}
                                onChange={handleInputChange}
                            />
                            <button
                                onClick={clickHandler}
                                className='size-10 z-1 ml-3 bg-blue-500'>
                                <CiSearch className='size-7 relative left-[-13px] bottom-[4px]' />
                            </button>
                        </div>
                    </div>
                    <button className='mt-[-10px] font-semibold' onClick={()=> navigate('/addnewpatient')}>Add New Patient</button>
                
                </div>

                <div className='w-full h-1 bg-blue-700 rounded-md items-center'></div>
                <div className='bg-transparent grid grid-cols-1 gap-4 m-3 p-2 rounded-md md:grid-cols-2 xl:grid-cols-3'>
                    {models.map((model) => (
                        <Link key={model._id} to={`/buttons/${model._id}`}>
                        <Card key={model._id} {...model}></Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PatientDetails;
