import React from "react";
import NavbarProfile from "../../components/NavbarProfile";
import SideProfile from "../../components/profileComponent/SideProfile";
import UpdateComponent from "../../components/profileComponent/UpdateComponent";
import Footer from "../../components/Footer";

export default function UpdateEmail() {

    return (
        <>
            <NavbarProfile />
            <div className='h-full bg-[#e9ebee] md:bg-[#f6f7f8] pt-10'>
                <div className='md:flex md:max-w-[1024px] mx-auto md:px-20 mt-20'>
                    <SideProfile />
                    <UpdateComponent />
                </div>
            </div>
            <Footer />
        </>
    )
}
