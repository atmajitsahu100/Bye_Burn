import React from 'react'
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';

const ContactCard = ({id, name, image, mail, qualification}) => {

  return (
    <div className='w-full bg-white h-full rounded-lg border border-blue-500 shadow-md'>
        <div className='w-full flex flex-col justify-center items-center p-2 gap-y-2'>
          <img src={image} alt='Image' className=' w-20 h-20 rounded-full'/>
          <div className='w-4/12 h-1 bg-blue-500 rounded-xl my-4'></div>
          <div className='w-full flex flex-col gap-y-2'>
            <div><p className='font-semibold text-xl text-gray-700 text-center gap-y-2'><span>{name}</span></p></div>
            <Link to={'#'} className='flex flex-col font-semibold text-xl text-gray-700 text-center gap-y-2 items-center justify-center hover:cursor-pointer'>
              <IoIosMail className='' /><p className=''><span>{mail}</span></p>
            </Link>
            <div><p className='font-semibold text-xl text-gray-700 text-center gap-y-2'><span>{qualification}</span></p></div>
          </div>
        </div>
    </div>
  )
}

export default ContactCard
