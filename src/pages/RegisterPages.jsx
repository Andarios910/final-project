import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
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
    if (!values.name) {
      errors.name = "Masukan nama anda!";
    } else if (!regex.test(values.name)) {
      errors.name = "This is not a valid email format!";
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
      <div className="w-full h-screen">
        <img
          src="https://cdn-2.tstatic.net/travel/foto/bank/images/nam-air_20161126_152947.jpg"
          alt="/"
          className="hidden sm:block absolute w-full h-full object-cover"
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-3 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Register</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded-lg"
                  type="name"
                  name="name"
                  id="name"
                  value={formValues.name}
                  onChange={handleChange}
                  placeholder="nama lengkap"
                  required=""
                />
                <p className="text-red-600">{formErrors.name}</p>

                <input
                  className="p-3 my-2 bg-gray-700 rounded-lg"
                  type="email"
                  name="email"
                  id="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="email address"
                  required=""
                />
                <p className="text-red-600">{formErrors.email}</p>

                <input
                  className="p-3 my-2 bg-gray-700 rounded-lg"
                  type="password"
                  name="password"
                  id="password"
                  value={formValues.password}
                  onChange={handleChange}
                  placeholder="password"
                  required=""
                />
                <p className="text-red-600">{formErrors.password}</p>

                <button className="bg-cyan-600 hover:bg-cyan-700 py-3 my-6 rounded-lg font-bold">
                  Register
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
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
