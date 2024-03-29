import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { updateUser, fetchUser, updateProfile, updatePhoneNumber } from '../features/user/userSlice';
import { useEffect } from 'react';

export default function UpdateComponent() {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))
    const id = user.id
    const { dataUser } = useSelector((state) => state.user)
    const [editEmail, setEditEmail] = useState(false);
    const [editPhoneNumber, setEditPhoneNumber] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [image, setImage] = useState('');

    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        phone: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const [button, setButton] = useState(false)

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexPhone = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;

        if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        }

        if (!regexPhone.test(values.phone)) {
            errors.phone = "This is not a valid phone number format!"
            setButton(true);
        } else {
            setButton(false)
        }
        
        return errors;
    };

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

    const handleSubmitEmail = async(e) => {
        try {
            e.preventDefault();
            await dispatch(updateUser({formValues, id}))
            setEditEmail(!editEmail)
            setTimeout(() => {
                window.location.reload(1)
            }, 1500)
        } catch(error) {
            console.log(error)
        }
    }
    
    const handleSubmitProfile = (e) => {
        e.preventDefault()
        const formdata = new FormData();
        formdata.append('file', image)
        formdata.append('id', id)
        dispatch(updateProfile(formdata))
        setTimeout(() => {
            window.location.reload(1)
        }, 1500)
    }

    const handleSubmitHp = (e) => {
        e.preventDefault();
        dispatch(updatePhoneNumber(formValues))
        setTimeout(() => {
            window.location.reload(1)
        }, 1500)
    }

    useEffect(() => {
        dispatch(fetchUser(user.id))
    }, [dispatch, user.id])
    
    return (
        <div className=' md:visible w-full rounded-xl pb-10 bg-white drop-shadow-lg md:ml-10 mb-10'>
            <h3 className='text-lg text-center font-medium mt-3 pt-10 md:pt-0'>Profile</h3>
            <p className='text-sm text-center text-gray-500'>Anda bisa mengatur detail profil Anda</p>
            <div className='w-3/4 mx-auto border border-gray-400 rounded-lg mt-5 p-5'>
                <div className='flex justify-between '>
                    <div>
                        <p className='mb-2 text-sm text-gray-500'>Email</p>
                        <h4 className='mb-3'>{dataUser.email}</h4>
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
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                                className={`w-full p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 mb-2`}
                            />
                            <p className={emailFocus ? "text-red-600 text-sm mb-2" : 'hidden'}>{formErrors.email}</p>
                            <div className='relative cursor-pointer'>
                                <input 
                                    type={showPassword === false ? "password" : "text"} 
                                    name='password'
                                    id='password' 
                                    placeholder='password'
                                    value={formValues.password}
                                    onChange={handleChange}
                                    onFocus={() => setPasswordFocus(true)}
                                    onBlur={() => setPasswordFocus(false)}
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
                                <p className={passwordFocus ? "text-red-600 text-sm mb-2" : "hidden"}>{formErrors.password}</p>
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
                        <h4 className='mb-3'>{dataUser.phoneNumber ? dataUser.phoneNumber : 'Mohon untuk diisi'}</h4>
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
                        <form onSubmit={handleSubmitHp} className='mt-5'>
                            <input 
                                type='phone' 
                                name='phone'
                                id='phone' 
                                placeholder='cth - 082227282930'
                                value={formValues.phone}
                                onChange={handleChange}
                                className={`w-full p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1`}
                            />
                            <p className="text-red-600 text-sm mb-2">{formErrors.phone}</p>
                            <button disabled={button} type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 mt-5 rounded-xl">
                                Simpan
                            </button>
                        </form>
                    </div>
                    :
                    <span></span>
                }
            </div>

            {/* Choose File */}
            <div className='w-3/4 mx-auto border border-gray-400 rounded-lg mt-5 p-5'>
                <div>
                    <p className='mb-2 text-sm text-gray-500'>Ubah Profile</p>
                    <form onSubmit={handleSubmitProfile} className='mt-2'>
                        <input 
                            type='file' 
                            name='profile'
                            id='profile' 
                            placeholder='Profile'
                            onChange={(e) => setImage(e.target.files[0])}
                            className={`w-full p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1`}
                        />
                        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 mt-5 rounded-xl">
                            Simpan
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
