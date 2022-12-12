import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { RiArrowLeftSLine } from 'react-icons/ri'

import { useDispatch } from 'react-redux';
import { handleLogin } from "../components/features/login/loginSlice";

export default function LoginPages() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    // const { isLoading, hasError} = useSelector((state) => state.login)
    const [showPassword, setShowPassword] = useState(false)
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    console.log(formValues)
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        dispatch(handleLogin(formValues))
    };

    const handleLoginGoogle = (e) => {
        try {
        } catch (error) {
        console.error(error);
        }
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
    <div className="relative">
        <div className="w-full h-screen">
            <img
                src="https://cdn-2.tstatic.net/travel/foto/bank/images/nam-air_20161126_152947.jpg"
                alt="bg"
                className="w-full h-screen object-cover"
            />
            <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
            <div className="absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[450px] z-2">
                <div className="h-full bg-black/75 text-white rounded-lg">
                    <div className="max-w-[320px] mx-auto py-8">
                        <div onClick={() => navigate('/')} className="flex items-center text-cyan-600 mb-5 cursor-pointer">
                            <RiArrowLeftSLine /> 
                            <span>Home</span>
                        </div>
                        <h1 className="text-3xl font-bold">Login</h1>
                        <form
                            onSubmit={handleSubmit}
                            className="w-full flex flex-col py-4"
                        >
                            <div className="">
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
                                    autoComplete="on"
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

                            <button
                                // onClick={handleSubmit}
                                type="submit"
                                className="bg-cyan-600 hover:bg-cyan-700 py-3 my-6 rounded-lg font-bold"
                            >
                                Login
                            </button>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <p>
                                    <input className="mr-2" type="checkbox" />
                                    Remember me
                                </p>
                                <p>Need Help?</p>
                            </div>
                            <div className="flex justify-center p-8">
                                <button
                                    onClick={handleLoginGoogle}
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="bg-red-600 hover:bg-red-700 inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 488 512"
                                    className="w-4 h-4">
                                        <path
                                            fill="currentColor"
                                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="bg-gray-800 hover:bg-gray-900 inline-block mx-5 px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                    className="w-4 h-4">
                                        <path
                                            fill="currentColor"
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="bg-blue-700 hover:bg-blue-800 inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-4 h-4">
                                    <path
                                        fill="currentColor"
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                    />
                                    </svg>
                                </button>
                            </div>
                            <p className="py-0">
                                <span className="text-white">Buat Akun Baru?</span>{" "}
                                <span
                                    onClick={() => navigate("/register")}
                                    className="font-medium text-cyan-600 hover:underline">
                                    Register
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
