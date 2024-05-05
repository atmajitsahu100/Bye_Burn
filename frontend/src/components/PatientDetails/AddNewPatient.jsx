import React, { useState } from 'react';
import logoImage from '../Logo/ByeBurns-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';


const AddNewPatient = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    age: '',
    gender: '',
    weight: ''
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/addpatient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast.success("Patient added successfully",{
          position: "top-right",
      });
        console.log("patient added successfully")
        setTimeout(() => {
          navigate('/patientdetails');
        }, 1000);
      } else {
        toast.error("error while adding patient",{
          position: "bottom-left",
      });
        console.log("error");
      }
    } catch (error) {
      console.error('Error:', error);
    }
    navigate('/patientdetails');
  };

  return (
    <>
      <section className=" bg-white dark:bg-gray-900 sm:h-screen">
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-14">
          <Link to={'/patientdetails'} className="flex flex-col items-center p-3">
            <img className="w-24 h-12 mr-2 rounded-md" src={logoImage} alt="logo" />
            <div className="text-4xl mb-2 text-red-600">ByeBurns</div>
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-all duration-200">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Add New Patient Detail
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      First Name
                    </label>
                    <input
                      id="grid-first-name"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Last Name
                    </label>
                    <input
                      id="grid-last-name"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label htmlFor="grid-mobile" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Mobile
                    </label>
                    <input
                      id="grid-mobile"
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="grid-age" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Age
                    </label>
                    <input
                      id="grid-age"
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Age"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label htmlFor="grid-gender" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Gender
                    </label>
                    <select
                      id="grid-gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      required
                    >
                      <option value="" disabled>Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label htmlFor="grid-weight" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Weight
                    </label>
                    <input
                      id="grid-weight"
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Weight"
                      required
                    />
                  </div>
                </div>
                <div className="w-full flex justify-end mt-3">
                  <button type="submit" className="w-[40%] font-semibold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                    Add Patient
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default AddNewPatient;