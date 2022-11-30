import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='p-10 bg-[#051036] text-gray-200'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                        <div className='mb-5'>
                            <h4 className='text-2xl pb-4'>E-Flight</h4>
                            <p className='text-gray-500'>
                                A123 Lost Street <br/>
                                Jakarta. P8 2432333 <br/>
                                Indonesia <br/><br/>
                                <strong>Phone: </strong> +62 812 3456 7890 <br/>
                                <strong>Email: </strong> eflight123@gmail.com<br/>
                            </p>
                        </div>
                        <div className='mb-5'>
                            <h4 className='pb-4'>Useful Links</h4>
                            <ul className='text-gray-500'>
                                <li className='pb-3'><i className='fa fa-chevron-right'></i><a href='/' className='hover:text-yellow-500'>Home</a></li>
                                <li className='pb-3'><i className='fa fa-chevron-right'></i><a href='/' className='hover:text-yellow-500'>City</a></li>
                                <li className='pb-3'><i className='fa fa-chevron-right'></i><a href='/' className='hover:text-yellow-500'>Contact</a></li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4 className='pb-4'>Our Service</h4>
                                <ul className='text-gray-500'>
                                    <li className='pb-3'><i className='fa fa-chevron-right'></i><a href='/' className='hover:text-yellow-500'>Lorem Ipsum</a></li>
                                    <li className='pb-3'><i className='fa fa-chevron-right'></i><a href='/' className='hover:text-yellow-500'>Lorem Ipsum</a></li>
                                    <li className='pb-3'><i className='fa fa-chevron-right'></i><a href='/' className='hover:text-yellow-500'>Lorem Ipsum</a></li>
                                </ul>
                        </div>
                        <div className='mb-5'>
                            <h4 className='pb-4'>Join Our Newsletter</h4>
                            <p className='text-gray-500 pb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <form className='flex flex-row flex-wrap'>
                                <input type="text"  className='text-gray-500 w-2/3 p-2 focus:border-yellow-500' placeholder='email@gmail.com' name='' id=''/>
                                <button className='p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-500'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-white text-gray-900 px-10'>
                <div className='max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center'>
                    <div className='text-center'>
                        <div>
                            Copyright <strong><span>e-flight</span></strong>. All Rightt Reserved
                        </div>
                        <div>
                            Designed by <a href='/' className='text-[#051036]'>Team</a>
                        </div>
                    </div>
                    <div className='text-center text-xl mb-2 text-white'>
                        <a href='/' className='w-10 h-10 rounded-full bg-[#051036]  hover:bg-yellow-500 mx-1 mt-5 inline-block pt-1'><i class="uil uil-twitter-alt"></i></a>
                        <a href='/' className='w-10 h-10 rounded-full bg-[#051036]  hover:bg-yellow-500 mx-1 mt-5 inline-block pt-1'><i class="uil uil-facebook-f"></i></a>
                        <a href='/' className='w-10 h-10 rounded-full bg-[#051036]  hover:bg-yellow-500 mx-1 mt-5 inline-block pt-1'><i class="uil uil-instagram"></i></a>
                        <a href='/' className='w-10 h-10 rounded-full bg-[#051036]  hover:bg-yellow-500 mx-1 mt-5 inline-block pt-1'><i class="uil uil-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer