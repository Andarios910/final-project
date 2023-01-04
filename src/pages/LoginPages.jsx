import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import ClipLoader from "react-spinners/ClipLoader";

import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../components/features/login/loginSlice";

export default function LoginPages() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { isLoading, hasError} = useSelector((state) => state.login)
    const [showPassword, setShowPassword] = useState(false)
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState({});

    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors(validate(formValues))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(formValues))
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        }

        if (values.password.length > 20) {
            errors.password = "Password must be less than 20 characters";
        }
        return errors;
    };

    const token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        if (token) {
            navigate("/");
        }       
    }, [token, navigate]);

    console.log(emailFocus)
    console.log(passwordFocus)

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
        <div className="relative overflow-hidden">
            <div className="w-screen h-full">
            <img
                src="https://img.freepik.com/free-vector/airplane-sky_1308-31418.jpg?w=996&t=st=1671101802~exp=1671102402~hmac=ca1814016328d9e97bc47bcf92d6eccbe878cfb76006c2381c4d2344061d6fe0"
                alt="bg"
                className="w-screen h-screen object-cover"
            />
            <div className="absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 h-[550px] w-[350px] md:w-[450px] z-2">
                <div className="h-full bg-white/75 text-black rounded-lg">
                <div className="max-w-[320px] mx-auto py-8">
                    <div
                    onClick={() => navigate("/")}
                    className="flex items-center text-cyan-600 mb-5 cursor-pointer">
                    <RiArrowLeftSLine />
                    <span>Home</span>
                    </div>
                    <h1 className="text-3xl font-bold">Login</h1>
                    <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col py-4">
                    <div className="">
                        <input
                        className="p-2.5 my-2 bg-white border border-gray-300 rounded-lg w-full"
                        type="email"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="email address"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        required
                        />
                        <p className={emailFocus ? "text-red-600 text-sm" : "hidden"}>{formErrors.email}</p>
                    </div>

                    <div className="relative">
                        <input
                        className="p-2.5 my-2 bg-white border border-gray-300 rounded-lg w-full"
                        type={showPassword === false ? "password" : "text"}
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

                        {showPassword === false ? (
                        <BsEye
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-6 right-3"
                        />
                        ) : (
                        <BsEyeSlash
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-6 right-3"
                        />
                        )}

                        <p className={passwordFocus ? "text-red-600 text-sm visible" : "hidden"}>
                            {formErrors.password}
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="bg-cyan-600 hover:bg-cyan-700 py-2.5 my-6 rounded-lg font-bold">
                        Login
                    </button>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                        <p>
                        <input className="mr-2" type="checkbox" />
                        Remember me
                        </p>
                        <p>Need Help?</p>
                    </div>
                    <p className="py-2 mt-20">
                        <span className="text-black">Buat Akun Baru?</span>{" "}
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
}
