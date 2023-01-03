import React, { useEffect } from 'react'
import { BsMegaphoneFill } from 'react-icons/bs'
import { format } from 'date-fns';

import { useDispatch, useSelector } from 'react-redux'
import { fetchNotification } from './features/notification/notificationSlice'

export default function Notification() {
    const dispatch = useDispatch();
    const { notification } = useSelector((state) => state.notification);
    const { id } = JSON.parse(localStorage.getItem('user'));

    const notificationR = [...notification].reverse()

    useEffect(() => {
        dispatch(fetchNotification(id))
    }, [dispatch, id])

    if (!notificationR) {
        return (
            <div className="w-96 absolute px-5 z-10 top-24 right-0 md:top-24 md:right-48 h-80 overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="notification">
                <div className="2xl:w-4/12 bg-gray-50 h-80 overflow-auto scrollbar-hide p-8 absolute right-0 rounded-lg ">
                    <div className="flex items-center justify-between">
                        <p className="text-2xl font-semibold leading-6 text-gray-800">Notifications</p>
                    </div>
                    <div>
                        <h3 className='text-gray-400 mt-20'>Notif Not Found</h3>
                    </div>
                </div>
            </div>
        )
    } else {

    return (
        <div className="w-96 absolute px-5 z-10 top-24 right-0 md:top-24 md:right-48 h-80 overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="notification">
            <div className="2xl:w-4/12 bg-gray-50 h-80 overflow-auto scrollbar-hide p-8 absolute right-0 rounded-lg ">
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold leading-6 text-gray-800">Notifications</p>
                </div>
                {
                    notificationR && notificationR?.map((item, index) => (
                        <div key={index} className="w-full p-4 mt-8 bg-white rounded shadow flex items-center">
                            <BsMegaphoneFill className='text-blue-600 w-6 h-6' />
                            <div className="pl-3">
                                <p className="text-sm leading-none">
                                    <span className="text-indigo-600 leading-tight text-sm">{item.message}</span>
                                </p>
                                <p className="text-xs leading-3 pt-4 text-gray-500">{format(Date.parse(item.createdAt), 'EEEE, dd-MM-yyyy')}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
}
