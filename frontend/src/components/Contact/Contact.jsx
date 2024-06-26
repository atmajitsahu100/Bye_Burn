import React from 'react'
// import data from './Contactdata'
// import ContactCard from './ContactCard';
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import mamImage from './Images/Joohi.webp'
import kishan from './Images/Kishan.png'
import tej from './Images/Tej.jpeg'
import atmjit from './Images/Atmjit.jpeg'
import sonu from './Images/Sonu.jpeg'
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {

  return (
      <div className='w-full h-full flex justify-center items-center p-3'>
        <div className='w-9/12 h-10/12 flex flex-col'>
          
          <div className='w-full h-fit flex justify-center items-center p-4'>
            <div className='bg-white h-full rounded-lg border border-blue-500 shadow-md hover:shadow-lg xl:w-3/12 lg:w-4/12 md:w-6/12 xs:w-full sm:w-full'>
              <div className='w-full flex flex-col justify-center items-center p-2 gap-y-2'>
                <img src={mamImage} alt='Image' className='w-18 h-18 rounded-full'/>
                <div className='w-4/12 h-1 bg-blue-500 rounded-xl my-4'></div>
                <div className='w-full flex flex-col gap-y-2'>
                  <div><p className='font-semibold text-xl text-gray-700 text-center gap-y-2'><span>Dr. Joohi Chauhan</span></p></div>
                  <Link to={"#"} className='flex flex-col font-semibold text-xl text-gray-700 text-center gap-y-2 items-center justify-center 
                    hover:cursor-pointer xl:flex-row'
                    onClick={()=>window.location.href = `mailto:joohi@mnnit.ac.in`}>
                    <IoIosMail className='mt-1 mx-2'/>
                    <p><span>joohi@mnnit.ac.in</span></p>
                  </Link>
                  <div><p className='font-semibold text-xl text-gray-700 text-center gap-y-2'><span>Assistant Professor</span></p></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className='w-full h-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 rounded-md p-2'>
            
          <div className='w-full bg-white h-full rounded-lg border border-blue-500 shadow-md hover:shadow-lg'>
              <div className='w-full flex flex-col justify-center items-center p-2 gap-y-2'>
                <img src={atmjit} alt='Image' className='w-20 h-20 rounded-full'/>
                <div className='w-4/12 h-1 bg-blue-500 rounded-xl my-4'></div>
                <div className='w-full flex flex-col gap-y-2'>
                  <div><p className='font-semibold text-xl text-gray-700 text-center gap-y-2'><span>Atmajit Sahoo</span></p></div>
                  <Link to={'#'} className='flex flex-col font-semibold text-xl text-gray-700 text-center gap-y-2 items-center justify-center 
                    hover:cursor-pointer xl:flex-row' onClick={()=>window.location.href = `mailto:atmajit.2022ca015@mnnit.ac.in`}>
                    <IoIosMail className='mt-1 mx-2' /><p className=''><span>atmajit.2022ca015...</span></p>
                  </Link>

                  <Link to={'https://www.linkedin.com/in/atmajit-sahoo-9459ab190'} className='flex font-semibold text-xl text-gray-700 text-center gap-y-2 items-center justify-center 
                    hover:cursor-pointer'>
                    <FaLinkedin className='mt-1 mx-2' /><p><span>Atmajit Sahoo</span></p>
                  </Link>
                  <div><p className='font-semibold text-xl text-gray-700 text-center gap-y-2'><span>MCA</span></p></div>
                </div>
              </div>
            </div>
            
            <div className='w-full bg-white h-full rounded-lg border border-blue-500 shadow-md hover:shadow-lg'>
              <div className='w-full flex flex-col justify-center items-center p-2 gap-y-2'>
                <img src={tej} alt='Image' className='w-20 h-20 rounded-full'/>
                <div className='w-4/12 h-1 bg-blue-500 rounded-xl my-4'></div>
                <div className='w-full flex flex-col gap-y-2'>
                  <div><p className='font-semibold text-xl text-gray-700 text-center gap-y-2'><span>Tejasvee Rathour</span></p></div>
                  <Link to={"#"} className='flex flex-col font-semibold text-xl text-gray-700 text-center gap-y-2 items-center justify-center 
                    hover:cursor-pointer xl:flex-row' 
                    onClick={()=>window.location.href = `mailto:tejasvee.2022ca109@mnnit.ac.in`}>
                    <IoIosMail className='mt-1 mx-2' /><p><span>tejasvee.2022ca109...</span></p>
                  </Link>

                  <Link to={'https://www.linkedin.com/in/tejasvee-rathour'} className='flex font-semibold text-xl text-gray-700 text-center gap-y-2 items-center justify-center 
                    hover:cursor-pointer'>
                    <FaLinkedin className='mt-1 mx-2' /><p><span>Tejasvee Rathour</span></p>
                  </Link>
                  <div><p className='font-semibold text-xl text-gray-700 text-center gap-y-2'><span>MCA</span></p></div>
                </div>
              </div>
            </div>

            <div className='w-full bg-white h-full rounded-lg border border-blue-500 shadow-md hover:shadow-lg'>
              <div className='w-full flex flex-col justify-center items-center p-2 gap-y-2'>
                <img src={kishan} alt='Image' className='w-20 h-20 rounded-full'/>
                <div className='w-4/12 h-1 bg-blue-500 rounded-xl my-4'></div>
                <div className='w-full flex flex-col gap-y-2'>
                  <div><p className='font-semibold text-xl text-gray-700 text-center gap-y-2'><span>Kishan Ahuja</span></p></div>
                  <Link to={'#'} className='flex flex-col font-semibold text-xl text-gray-700 text-center gap-y-2 items-center justify-center 
                    hover:cursor-pointer xl:flex-row' onClick={()=>window.location.href = `mailto:kishan.2022ca045@mnnit.ac.in`}>
                    <IoIosMail className='mt-1 mx-2' /><p className=''><span>kishan.2022ca045...</span></p>
                  </Link>

                  <Link to={'https://www.linkedin.com/in/kishan-ahuja-ba9a0b246'} className='flex font-semibold text-xl text-gray-700 text-center gap-y-2 items-center justify-center 
                    hover:cursor-pointer'>
                    <FaLinkedin className='mt-1 mx-2' /><p><span>Kishan Ahuja</span></p>
                  </Link>
                  <div><p className='font-semibold text-xl text-gray-700 text-center gap-y-2'><span>MCA</span></p></div>
                </div>
              </div>
            </div>

            <div className='w-full bg-white h-full rounded-lg border border-blue-500 shadow-md hover:shadow-lg'>
              <div className='w-full flex flex-col justify-center items-center p-2 gap-y-2'>
                <img src={sonu} alt='Image' className='w-20 h-20 rounded-full'/>
                <div className='w-4/12 h-1 bg-blue-500 rounded-xl my-4'></div>
                <div className='w-full flex flex-col gap-y-2'>
                  <div><p className='font-semibold text-xl text-gray-700 text-center gap-y-2'><span>Sonu Acharya</span></p></div>
                  <Link to={'#'} className='flex flex-col font-semibold text-xl text-gray-700 text-center gap-y-2 items-center justify-center 
                    hover:cursor-pointer xl:flex-row' onClick={()=>window.location.href = `mailto:sonu.2022ca104@mnnit.ac.in`}>
                    <IoIosMail className='mt-1 mx-2' /><p className=''><span>sonu.2022ca104...</span></p>
                  </Link>

                  <Link to={'https://www.linkedin.com/in/sonu-acharya-6a6914272'} className='flex font-semibold text-xl text-gray-700 text-center gap-y-2 items-center justify-center 
                    hover:cursor-pointer'>
                    <FaLinkedin className='mt-1 mx-2' /><p><span>Sonu Acharya</span></p>
                  </Link>
                  <div><p className='font-semibold text-xl text-gray-700 text-center gap-y-2'><span>MCA</span></p></div>
                </div>
              </div>
            </div>
          
          </div>
          <br />
          <div className='w-full mb-5'>
          <p className='text-lg font-semibold text-gray-700 text-center'>
            We would like to acknowledge the support of Indian Institute of Technology Ropar (IIT Ropar) and Safdarjung Burn Hospital, Delhi.
          </p>
        </div>
        </div>
      </div>
      // </div>
  )
}
export default Contact
