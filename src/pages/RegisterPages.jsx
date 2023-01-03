import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { RiArrowLeftSLine } from 'react-icons/ri'
import ClipLoader from "react-spinners/ClipLoader";

import { useDispatch, useSelector } from "react-redux";
import { handleRegister } from "../components/features/login/registerSlice";

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { isLoading, hasError} = useSelector((state) => state.register)
  const [showPassword, setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleRegister(formValues))
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (values.firstName < 2) {
      errors.firstName = "First name must be more than 1 characters"
    }

    if (values.firstName > 20) {
      errors.firstName = "First name must less than 21 characters"
    }
    
    if (values.lastName < 2) {
      errors.lastName = "Last name must be more than 1 characters"
    }

    if (values.lastName > 20) {
      errors.lastName = "Last name must less than 21 characters"
    }

    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (values.password.length < 7) {
      errors.password = "Password must be more than 7 characters";
    } else if (values.password.length > 20) {
      errors.password = "Password must be max 20 characters";
    }

    return errors;
  };

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  if (hasError) {
      return (
          <p>Error login/register</p>
      )
  }

  if (isLoading) {
      return (
          <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
              <ClipLoader
                  color="#3182ed"
                  size={64}
              />
          </div>
      )
  } else {

  return (
    <div>
        <div className="w-full h-full relative overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/airplane-sky_1308-31418.jpg?w=996&t=st=1671101802~exp=1671102402~hmac=ca1814016328d9e97bc47bcf92d6eccbe878cfb76006c2381c4d2344061d6fe0"
            alt="bg"
            className="w-screen h-screen object-cover"
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[550px] w-[350px] md:w-[450px] z-2">
            <div className="max-w-[450px] h-full mx-auto bg-white/75 text-black rounded-lg">
              <div className="max-w-[320px] mx-auto py-2">
                <div onClick={() => navigate('/')} className="flex items-center font-semibold text-cyan-600 my-3 cursor-pointer">
                    <RiArrowLeftSLine /> 
                    <span>Home</span>
                </div>
                <h1 className="text-3xl font-bold">Register</h1>
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col py-4"
                >
                  <div>
                    <input
                      className="p-2.5 my-2 bg-white border border-gray-300 rounded-lg w-full"
                      type="firstName"
                      name="firstName"
                      id="firstName"
                      value={formValues.firstName}
                      onChange={handleChange}
                      onFocus={() => setFirstNameFocus(true)}
                      onBlur={() => setFirstNameFocus(false)}
                      placeholder="First Name"
                      required
                    />
                    <p className={firstNameFocus ? "text-red-600 text-sm" : 'hidden'}>{formErrors.firstName}</p>
                  </div>

                  <div>
                    <input
                      className="p-2.5 my-2 bg-white border border-gray-300 rounded-lg w-full"
                      type="lastName"
                      name="lastName"
                      id="lastName"
                      value={formValues.lastName}
                      onChange={handleChange}
                      onFocus={() => setLastNameFocus(true)}
                      onBlur={() => setLastNameFocus(false)}
                      placeholder="Last Name"
                      required
                    />
                    <p className={lastNameFocus ? "text-red-600 text-sm" : 'hidden'}>{formErrors.lastName}</p>
                  </div>

                  <div>
                    <input
                      className="p-2.5 my-2 bg-white border border-gray-300 rounded-lg w-full"
                      type="email"
                      name="email"
                      id="email"
                      value={formValues.email}
                      onChange={handleChange}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      placeholder="email address"
                      required
                    />
                    <p className={emailFocus ? "text-red-600 text-sm" : 'hidden'}>{formErrors.email}</p>
                  </div>

                  <div className="relative">
                    <input
                      className="p-2.5 my-2 bg-white border border-gray-300 rounded-lg w-full"
                      type={(showPassword === false) ? 'password':'text'} 
                      name="password"
                      id="password"
                      autoComplete="on"
                      value={formValues.password}
                      onChange={handleChange}
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                      placeholder="password"
                      required
                    />
                    {
                      (showPassword === false) ? 
                          <BsEye onClick={() => setShowPassword(!showPassword)} className="absolute top-6 right-3" /> 
                          :
                          <BsEyeSlash onClick={() => setShowPassword(!showPassword)} className="absolute top-6 right-3" />
                    }
                    <p className={passwordFocus ? "text-red-600 text-sm" : 'hidden'}>{formErrors.password}</p>
                  </div>

                  <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 py-2.5 my-6 rounded-lg font-bold">
                    Register
                  </button>
                  <p className="py-2 md:py-3">
                      <span className="text-black">Sudah Punya Akun?</span>{" "}
                      <span
                        onClick={() => navigate("/login")}
                        className="font-medium text-cyan-600 hover:underline">
                        Login
                      </span>
                  </p>
                </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
}
