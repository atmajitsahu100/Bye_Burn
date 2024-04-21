import React from "react";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const SignUpStep1 = ({ formData, updateForm }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    updateForm({ [name]: value });
  };

  useEffect(() => {
   
    document.body.classList.add("login-body");

    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);

  return (
    <>
        <div className=" w-full p-3 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 
            hover:shadow-lg transition-all duration-200">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Enter Your Email & Password
                    </h1>
                    <form className="space-y-4 md:space-y-6">
                        <div>
                            <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500"/>
                        </div>
                        <div>
                            <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            id="password" 
                            placeholder="••••••••"
                            required=""        
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500" />
                        </div>
                        <div>
                            <TextField
                            label="Re-Enter Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            name="confirm_password"
                            placeholder="confirm password"
                            value={formData.confirm_password}
                            onChange={handleChange}
                            required=""        
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500" />

                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                            Don’t have an account yet? <Link to={"/signup"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup</Link>
                        </p>
                    </form>
                </div>
        </div>
    </>
  );
};

export default SignUpStep1;