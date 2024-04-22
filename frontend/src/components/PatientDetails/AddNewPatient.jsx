import React from 'react'
import logoImage from '../Logo/ByeBurns-logo.png'
import { Link, useNavigate } from "react-router-dom";
import NavBar from '../../pages/Navbar';

const AddNewPatient = () => {
    const navigate = useNavigate();

    function ClickHandler(){
        navigate('/humanmodel');
    }

  return (
    <>
    <section  className="bg-blue-50 dark:bg-gray-900 sm: h-screen">
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-14">
          <Link to={'/'} className=" flex flex-col items-center p-3">
              <img className=" w-24 h-12 mr-2 bg-slate-300 rounded-md" src={logoImage} alt="logo"/>   
              <div className=" text-4xl mb-2 text-red-600">ByeBurn</div>
          </Link>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-all duration-200">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Add New Patient Detail
                    </h1>
                    <form class="space-y-4 md:space-y-6" onSubmit={ClickHandler}>
                        {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl 
                            dark:text-white m-2 mb-5 text-center">Add New Patient Detail
                        </h1> */}
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input 
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border
                                    border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                                    focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" 
                                    required/>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input 
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                                    focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" 
                                    required="" />
                            </div>
                        </div>
                        
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-Mobile">
                                    Mobile
                                </label>
                                <input 
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
                                    rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white 
                                    focus:border-gray-500" id="grid-password" type="text" placeholder="10-digit Mobile number" />
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-Age">
                                    Age
                                </label>
                                <input 
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                                    focus:border-gray-500" id="grid-city" type="text" placeholder="In Years" />
                            </div>
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-Gender">
                                    Gender
                                </label>
                                <div class="relative">
                                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 
                                        text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white 
                                        focus:border-gray-500" id="grid-Gender">
                                        <option selected>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-Weight">
                                    Weight
                                </label>
                                <input 
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="grid-Weight" type="text" placeholder="In Kg" />
                            </div>
                        </div>
                        <div className='w-full flex justify-end mt-3'>
                            <button className='w-[40%] font-semibold'>Add Patient</button>
                        </div>
                    </form>    
                </div>
            </div>
        </div>
      </section>
      </>
  )
}

export default AddNewPatient
