import React from 'react'
import data from '../data'
import Card from './Card';

const HumanModels = () => {
    const models = data;

  return (
    <div className=' w-full h-full bg-blue-50 flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>
                <div className='m-3 h-12 px-3 border-4 border-dashed border-blue-700 rounded-lg'>
                    <h2 className='font-semibold text-3xl'>Select Human Models</h2>
                </div>
            </div>
            <div className='w-11/12 h-1 bg-blue-500 rounded-md items-center'></div>
        <div className=' w-7/12 h-full m-2 bg-blue-50 grid grid-cols-1 md:grid-cols-2 gap-5 rounded-md p-2'>
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
    </div>
  )
}

export default HumanModels
