import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Icon from './Icon';
import Name from './Name';
import { auth} from "../config/firebase";
import {
    signOut,
  } from "firebase/auth";
  import Cookies from "universal-cookie";
const cookies = new Cookies();

function Sidebar() {
    const refToken = cookies.get("auth-token");
    const history=useNavigate();
    
    // Handle Logout
    const logOut = async () => {
        try {
        await signOut(auth);
        cookies.remove("auth-token");
        history("/login");
        } catch (err) {
        console.error(err);
        }
    };

    return (
        <div className='lmobile:block'>
            <div className="fixed h-full bg-[#0f0223] transition-all duration-300 ease-in-out ">
                <div className='flex justify-center mt-3'>
                    <div className='flex align-middle gap-2'>
                        <Icon/>
                        <Name/>
                    </div>
                </div>
                <div className='text-gray-400 text-left font-semibold ml-5 mt-20 text-lg'>
                    <p className='mt-3 cursor-pointer'>Opportunities</p>
                    <p className='mt-3 cursor-pointer'>My Portfolio</p>
                    <p className='mt-3 cursor-pointer'>Settings</p>
                </div>
                <div className='text-gray-400 text-left font-semibold ml-5 mt-14 text-lg absolute bottom-7'>
                    <p className='mt-3 cursor-pointer'>My Profile</p>
                    <p className='mt-3 cursor-pointer' onClick={logOut}>Logout</p>
                    <p className='mt-8'>Help & Support</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
