import React, { useState } from 'react'
import ProfileDetail from '../../components/profileComponent/ProfileDetail';
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function UpdateComponent() {
    const [editEmail, setEditEmail] = useState(false);
    const [editPhoneNumber, setEditPhoneNumber] = useState(false);
    const [showPassword, setShowPassword] = useState(false)

    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState({});

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        }
        return errors;
    };

    const [nohp, setNoHp] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors(validate(formValues))
    };

    const handleClickEditEmail = () => {
        setEditEmail(!editEmail)
    }

    const handleClickEditPhoneNumber = () => {
        setEditPhoneNumber(!editPhoneNumber)
    }

    const handleSubmitEmail = (e) => {
        e.preventDefault();
        console.log(formValues)
    }
    
    const handleSubmit = () => {

    }

    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div className=' md:visible w-full rounded-xl pb-10 bg-white drop-shadow-lg md:ml-10 mb-10'>
            <h3 className='text-lg text-center font-medium mt-3 pt-10 md:pt-0'>Profile</h3>
            <p className='text-sm text-center text-gray-500'>Anda bisa mengatur detail profil Anda</p>
            <div className='w-3/4 mx-auto border border-gray-400 rounded-lg mt-5 p-5'>
                <div className='flex justify-between '>
                    <div>
                        <p className='mb-2 text-sm text-gray-500'>Email</p>
                        <h4 className='mb-3'>{user.email}</h4>
                    </div>
                    <p 
                        className='text-blue-600 hover:text-blue-800 cursor-pointer'
                        onClick={handleClickEditEmail}
                    >
                        Edit
                    </p>
                </div>
                {
                    editEmail ?
                    <div>
                        <hr/>
                        <form onSubmit={handleSubmitEmail} className='mt-5'>
                            <input 
                                type='text' 
                                name='email'
                                id='email' 
                                placeholder='email'
                                value={formValues.email}
                                onChange={handleChange}
                                className={`w-full p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 mb-2`}
                            />
                            <p className="text-red-600 text-sm mb-2">{formErrors.email}</p>
                            <div className='relative cursor-pointer'>
                                <input 
                                    type={showPassword === false ? "password" : "text"} 
                                    name='password'
                                    id='password' 
                                    placeholder='password'
                                    value={formValues.password}
                                    onChange={handleChange}
                                    className={`w-full p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1`}
                                />
                                {
                                    showPassword === false ? 
                                        <BsEye 
                                            onClick={() => setShowPassword(!showPassword)}
                                            className='absolute top-2.5 right-2' 
                                        /> 
                                    :
                                        <BsEyeSlash 
                                            onClick={() => setShowPassword(!showPassword)}
                                            className='absolute top-2.5 right-2' 
                                        />
                                }
                                <p className="text-red-600 text-sm mb-2">{formErrors.password}</p>
                            </div>
                            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 mt-5 rounded-xl">
                                Simpan
                            </button>
                        </form>
                    </div>
                    :
                    <span></span>
                }
            </div>
            
            {/* no Hp */}
            <div className='w-3/4 mx-auto border border-gray-400 rounded-lg mt-5 p-5'>
                <div className='flex justify-between '>
                    <div>
                        <p className='mb-2 text-sm text-gray-500'>Nomor Handphone</p>
                        <h4 className='mb-3'>Mohon diisi</h4>
                    </div>
                    <p 
                        className='text-blue-600 hover:text-blue-800 cursor-pointer'
                        onClick={handleClickEditPhoneNumber}
                    >
                        Edit
                    </p>
                </div>
                {
                    editPhoneNumber ?
                    <div>
                        <hr/>
                        <form onSubmit={handleSubmit} className='mt-5'>
                            <input 
                                type='text' 
                                name='nohp'
                                id='nohp' 
                                placeholder='No Hp'
                                onChange={(e) => setNoHp(e.target.value)}
                                className={`w-full p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1`}
                            />
                            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 mt-5 rounded-xl">
                                Simpan
                            </button>
                        </form>
                    </div>
                    :
                    <span></span>
                }
            </div>
        </div>
    )
}
