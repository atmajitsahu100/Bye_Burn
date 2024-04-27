import React, { useState } from 'react'
import data from '../data'
import Card from './Card';

const HumanModels = () => {

    const [View, setView] = useState("front");

    if(View === "front"){
        var models = data.filter(data => data.view === "front");
    }
    else{
        models = data.filter(data => data.view === "back");
    }   

  return (
    <>
        <div className=' w-full h-full bg-white flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-between items-center gap-20 md:flex-row gap-y-2'>
                    <div className='m-3 h-12 px-3 border-4 border-dashed border-blue-700 rounded-lg'>
                        <h2 className='font-semibold text-3xl'>Select Human Models</h2>
                    </div>
                        <div className='flex p-1 gap-x-1 rounded-full max-w-max bg-gray-100'>
                            <button
                                className={`${View === "back" ? 
                                "bg-gray-100 text-blue-700 font-semibold hover:bg-transparent" :
                                "bg-blue-700 text-white font-bold"} py-2 px-5 rounded-full transition-all duration-200`}
                                onClick={()=> setView("front")}
                            >Front</button>
                            <button
                                className={`${View === "front" ? 
                                "bg-gray-100 text-blue-700 font-semibold hover:bg-transparent" :
                                "bg-blue-700 text-white font-bold"} py-2 px-5 rounded-full transition-all duration-200`}
                                onClick={()=> setView("back")}
                            >Back</button>
                        </div>
                </div>
                <div className='w-11/12 h-1 bg-blue-500 rounded-md items-center'></div>
            <div className=' w-8/12 h-full m-2 bg-blue-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 rounded-md p-2'>
                {
                    models.map( (model) => {
                        return (
                            <div className='bg-white flex justify-center items-center shadow-blue-500
                            rounded-md hover:shadow-lg'>
                                <Card key={model.id}{...model}></Card>
                            </div>
                        )
                    })
                }
            </div> 
            <div className='w-8/12 p-3 mb-4 flex justify-between'>
                <button className=' w-32 font-semibold'>Skip</button>
                <button className=' w-32 font-semibold'>Next</button>
            </div>
        </div>
    </>
  )
}

export default HumanModels
