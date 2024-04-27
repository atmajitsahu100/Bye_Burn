import React from 'react'
import { useNavigate } from 'react-router'

const ButtonsPage = () => {

    const navigate = useNavigate();

  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-8/12 h-fit border-2 border-gray-200 rounded-md hover:shadow-lg p-2'>
            <div className='w-full flex flex-row justify-between p-3 bg-slate-300 rounded-md mb-4'>
                <h1 className=' font-bold text-2xl'>For Estimation TBSA and TFR </h1>
                <button id='TBSA' className='hover:bg-red-500' onClick={()=>navigate('/humanmodel')} >Click Here</button>
            </div>
            <div className='w-full flex flex-row justify-between p-3 bg-slate-300 rounded-md mb-4'>
                <h1 className=' font-bold text-2xl'>For Burn Classification</h1>
                <button className='hover:bg-red-500' onClick={()=>navigate('/')}>Click Here</button>
            </div>
            <div className='w-full flex flex-row justify-between p-3 bg-slate-300 rounded-md'>
                <h1 className=' font-bold text-2xl'>For Burn Segmentation</h1>
                <button className='hover:bg-red-500' onClick={()=>navigate('/')}>Click Here</button>
            </div>
        </div>
    </div>
  )
}

export default ButtonsPage
