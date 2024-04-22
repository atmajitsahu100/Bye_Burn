import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Paper,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import "../../components/styles/SignUpForm.css";
import SignUpStep1 from "./SignUpStep1";
import SignUpStep2 from "./SignUpStep2";
import SignUpStep3 from "./SignUpStep3";
import NavBar from "../../pages/Navbar";



const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    password: "",
    confirm_password: "",
    lastName: "",
    address: {
      country: "",
      city: "",
    },
    education: {
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
    },
  });

  const updateForm = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const goNext = () => {

    if (curr === 0) {

  
      if (!formData.email) {
        toast.error("email is required");
        setCurr(0)
        return;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
        toast.error("Invalid email address");
        setCurr(0);
        return;
      }

      
      else if (formData.password !== formData.confirm_password) {
        toast.error("password and confirm password not matching");
        setCurr(0);
        return;
      }

    
      // else if (!/^[a-zA-Z0-9!@#$%^&*]{6,12}$/.test(formData.password)) {
      //   toast.error("Password should contain one Capital , one small, one special char, minlen=6, maxlen=12");
      //   setCurr(0);
      //   return;
      // }
    }

    if (curr === 1) {
      if (formData.firstName === "" || formData.lastName === "") {
        toast.error("required field");
        setCurr(1);
        return;
      }
    }

    if (curr === 2) {
      if (formData.address.country === "") {
        toast.error("required field");
        setCurr(2);
        return;
      }
    }

    setCurr((prev) => prev + 1);
  };

  const steps = ["email & password", "name", "address"];
  const [curr, setCurr] = useState(0);

  const goBack = () => {
    setCurr((prev) => prev - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    console.log("Submitting form data to the backend:", formData);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          formData,
        },
        { withCredentials: true }
      );
      console.log("After Api");
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      navigate("/signup");
      console.log(error);
    }
  };

  return (
    <>
      <section className="bg-blue-50 dark:bg-gray-900">
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-14">
            <title> signup </title>
              <h2 className=" text-4xl mb-2 text-blue-700 font-bold"> Signup </h2>
              <Stepper  activeStep={curr} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Paper className="m-3">
                {curr === steps.length ? (
                  <div className="w-[30vh] p-5 text-center flex flex-col gap-4">
                    <Typography>All steps completed</Typography>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </div>
                ) : (
                  <div className="w-[80vh] bg-slate-300 flex flex-col items-center p-5 rounded-md">
                      <Typography className=" text-blue-500 font-bold">{steps[curr]}</Typography>
                      {curr === 0 && (
                        <SignUpStep1 formData={formData} updateForm={updateForm} />
                      )}
                      {curr === 1 && (
                        <SignUpStep2 formData={formData} updateForm={updateForm} />
                      )}
                      {curr === 2 && (
                        <SignUpStep3 formData={formData} updateForm={updateForm} />
                      )}

                      <div className=" w-[100vh] flex flex-row justify-around m-3">
                        <Button disabled={curr === 0} onClick={goBack}>
                          Back
                        </Button>
                        <Button variant="contained" color="primary" onClick={goNext}>
                          Next
                        </Button>
                      </div>
                  </div>
                )}
              </Paper>

              <ToastContainer />
              </div>
      </section>
    </>
  );
};

export default Signup;