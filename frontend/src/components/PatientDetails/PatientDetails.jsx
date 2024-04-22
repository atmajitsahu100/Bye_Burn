import React from 'react'
import NavBar from '../../pages/Navbar'
import { CiSearch } from "react-icons/ci";

import data from './data'
import Card from './Card';
import { Navigate, useNavigate } from 'react-router';

const PatientDetails = () => {

    const navigate = useNavigate();
    const models = data;

    function clickHandler(){
        console.log("Clicked");
    }

    function clickHandlerPatient(){
        navigate('/addnewpatient');
    }


  return (
    <div>
        <div className="bg-blue-50 p-5 h-screen">
            <div className='flex justify-center'>
                <h1 className=" w-[30%] text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center border-dashed border-4 rounded-lg border-blue-900 ">Patient Details</h1>
            </div>
            <div className=' h-fit flex justify-between items-center m-5'>
                <div className=" xl:w-96 flex items-center justify-center">
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
                        aria-describedby="button-addon2" />
                        <button 
                            onClick={clickHandler}
                            className=' size-10 z-1 ml-3 bg-blue-500'>
                                <CiSearch className='size-7 relative left-[-13px] bottom-[4px]'/>
                        </button>
                    </div>
            </div>
                <button className='mt-[-10px] font-semibold' onClick={clickHandlerPatient} >Add New Patient</button>
            </div>

            <div className='w-full h-1 bg-blue-700 rounded-md items-center'></div>
            <div className=' bg-transparent grid grid-cols-1 gap-4 m-3 p-2 rounded-md md:grid-cols-2 xl:grid-cols-3'>
            {
                models.map( (model) => {
                    return (
                        <Card key={model.id}{...model}></Card>
                    )
                })
            }
            </div>
        </div>
      </div>
  )
}

export default PatientDetails;
