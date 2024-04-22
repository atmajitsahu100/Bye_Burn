import React, { useState } from "react";
import logoImage from '../Logo/ByeBurns-logo.png'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm = () => {
  
  const navigate = useNavigate();
  
  const [showPassword, SetshowPassword] = useState(false);

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      username: "",
      password: "",
    });
  };

  useEffect(() => {
    document.body.classList.add("login-body");
    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);


  return (
    <>
      <section  className="bg-blue-50 dark:bg-gray-900 sm: h-screen">
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-14">
          <Link to={'/'} className=" flex flex-col items-center p-3">
              <img className=" w-24 h-12 mr-2 bg-slate-300 rounded-md" src={logoImage} alt="logo"/>   
              <div className=" text-4xl mb-2 text-red-600">ByeBurn</div>
          </Link>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 
            hover:shadow-lg transition-all duration-200">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input 
                            type="email" 
                            name="email"
                            id="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={handleOnChange}
                            required=""
                            classNameName="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input 
                            type={showPassword ? ("text") : ("password")} 
                            name="password" 
                            id="password" 
                            placeholder="••••••••"
                            required=""               
                            value={password}
                            onChange={handleOnChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500" />
                            <span onClick={()=> SetshowPassword((prev)=> !prev)}>
                              {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input 
                                  id="remember" 
                                  aria-describedby="remember" 
                                  required=""
                                  type="checkbox" className="w-4 h-4 border border-gray-300 rounded 
                                  bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 
                                  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <Link to={'/'} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                        </div>
                        <button 
                        type="submit" 
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 
                        focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
                        rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 
                        dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:shadow-lg
                        shadow-cyan-500/50 transition-all duration-200">
                          Sign in</button>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                            Don’t have an account yet? <Link to={"/signup"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default LoginForm;