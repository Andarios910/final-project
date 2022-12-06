import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { RiArrowLeftSLine } from 'react-icons/ri'

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState({
    firstName: "",
    LastName: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
      errors.firstName = "Masukan nama depan anda!";
    }

    if (!values.lastName) {
      errors.lastName = "Masukkan nama belakang anda!"
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Periksa Password Kembali";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div>
        <div className="w-full h-screen relative">
          <img
            src="https://cdn-2.tstatic.net/travel/foto/bank/images/nam-air_20161126_152947.jpg"
            alt="bg"
            className="w-full h-screen object-cover"
          />

          <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[450px] z-2">
            <div className="max-w-[450px] h-full mx-auto bg-black/75 text-white rounded-lg">
              <div className="max-w-[320px] mx-auto py-2">
                <div onClick={() => navigate('/')} className="flex items-center text-cyan-600 my-2 cursor-pointer">
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
                      className="p-3 my-2 bg-gray-700 rounded-lg w-full"
                      type="firstName"
                      name="firstName"
                      id="firstName"
                      value={formValues.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required=""
                    />
                    <p className="text-red-600">{formErrors.lastName}</p>
                  </div>

                  <div>
                    <input
                      className="p-3 my-2 bg-gray-700 rounded-lg w-full"
                      type="lastName"
                      name="lastName"
                      id="lastName"
                      value={formValues.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required=""
                    />
                    <p className="text-red-600">{formErrors.lastName}</p>
                  </div>

                  <div>
                    <input
                      className="p-3 my-2 bg-gray-700 rounded-lg w-full"
                      type="email"
                      name="email"
                      id="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder="email address"
                      required=""
                    />
                    <p className="text-red-600">{formErrors.email}</p>
                  </div>

                  <div className="relative">
                    <input
                      className="p-3 my-2 bg-gray-700 rounded-lg w-full"
                      type={(showPassword === false) ? 'password':'text'} 
                      name="password"
                      id="password"
                      value={formValues.password}
                      onChange={handleChange}
                      placeholder="password"
                      required=""
                    />
                    {
                      (showPassword === false) ? 
                          <BsEye onClick={() => setShowPassword(!showPassword)} className="absolute top-6 right-3" /> 
                          :
                          <BsEyeSlash onClick={() => setShowPassword(!showPassword)} className="absolute top-6 right-3" />
                    }
                    <p className="text-red-600">{formErrors.password}</p>
                  </div>

                  <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 py-3 my-6 rounded-lg font-bold">
                    Register
                  </button>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <p>
                      <input className="mr-2" type="checkbox" />
                      Remember me
                    </p>
                    <p>Need Help?</p>
                  </div>
                  <p className="py-2">
                      <span className="text-white">Sudah Punya Akun?</span>{" "}
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
