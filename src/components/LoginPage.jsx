import React, { useEffect } from 'react'
import { auth, googleProvider,usersInfo } from "../config/firebase";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
import{ collection } from "firebase/firestore"
import { Typewriter } from "react-simple-typewriter";
  import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Lottie from 'lottie-react';
import loginLottie from "../assets/loginLottie.json"
import loginbg from "../assets/loginbgLottie.json"
const cookies = new Cookies();




function Login() {
      const history = useNavigate();
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [isValid,setIsValid] = useState("");
      const refToken = cookies.get("auth-token");
      const userRef=collection(usersInfo,"usersInfo");
      const [phoneNumber, setPhoneNumber] = useState('');
      const [otp, setOtp] = useState('');
      const hardcodedPhoneNumber = '1234567890'; // Hardcoded phone number
      const hardcodedOTP = '123456'; // Hardcoded OTP value

      const handleLogin = () => {
        if (phoneNumber === hardcodedPhoneNumber && otp === hardcodedOTP) {
          history('/')
        } else {
          alert('Invalid phone number or OTP');
        }
  };

      useEffect(() => {
        if (refToken) {
          history("/");
        }
      }, [ refToken]);
      
      const signIn = async () => {
      try {
          const result=await signInWithEmailAndPassword(auth, email, password);
          cookies.set("auth-token", result.user.refreshToken);
          history("/");
      } catch (err) {
        console.error(err);
        setIsValid("*Invalid Account")
      }
      };
    const SignInWithGoogle = async () => {
    try {
      const result=await signInWithPopup(auth, googleProvider);
      cookies.set("auth-token", result.user.refreshToken);
            history("/");
          } catch (err) {
            console.error(err);
          }
        }



  return (
    // 3rem only for mobile
    <div className='lmobile:h-[100vh] flex justify-center items-center  bg-emerald-800 '>
 
    <div className=''>
            <Lottie animationData={loginbg} loop={true} className=' hidden lmobile:block w-[100vw] z-0 absolute bottom-0 left-0  ' />
      {/* lottie div */}
      <div className='flex-wrap lmobile:flex justify-center     '>
        <div className='  z-10 opacity-90 lmobile:hidden md:block'>
          <div className='bg-black  w-[90vw] lmobile:w-[48vw]  lg:w-[44vw] mt-8 lmobile:mt-0  rounded-t-lg  lmobile:rounded-t-none     sm:rounded-l-lg  overflow-hidden  shadow-gray-800 shadow-2xl '>
            <Lottie animationData={loginLottie} loop={true} className='' />
          </div>
        </div>
        {/* form div */}
        <div className="  bg-white shadow-gray-800 shadow-2xl   backdrop-blur-lg py-[0.5rem] lmobile:py-[1rem]  lg:py-[1.4rem]  px-[2rem] lg:px-[3rem]  relative   rounded-b-lg  lmobile:rounded-lg md:rounded-none md:rounded-r-lg   opacity-100 lmobile:opacity-95 md:opacity-100 mb-10 lmobile:mb-0 ">
          <div className=' '>
            <div className=" w-[70vw] sm:w-[60vw] md:w-[35vw]  lg:w-[30vw]   ">
              <form  onSubmit={signIn} className=''>
                 <div className=" space-y-3  md:space-y-2 lg:space-y-5 mt-3 md:mt-0">
                 <h2 className=" text-[2rem] md:text-3xl font-bold  text-[#5F0F40] ">
                    Sign in
                  </h2>
                  <p className="my-3 text-xs lg:text-sm text-gray-600">
                    Don&#x27;t have an account?{" "}
                    <Link className="font-semibold text-black transition-all duration-200 hover:underline" to="/login">
                    Create  Account
                    </Link>
                  </p>
                    <div>
                      <label for="" className="text-[14.5px] lg:text-base font-medium text-black">
                          Phone Number:{" "}
                      </label>
                      <div className="mt-2">
                          <input
                            className="flex h-9 lg:h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Phone No"
                            required
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}/>
                      </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                          <label for="" className=" text-[14.5px] lg:text-base font-medium text-gray-900">
                              OTP{" "}
                          </label>
                          <Link className=" text-[13px] lg:text-sm font-semibold text-black hover:underline" to="/">
                                  Resend OTP?{" "}
                          </Link>
                        </div>
                        <div className="mt-2">
                            <input
                              className="flex h-9 lg:h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              type="password"
                              placeholder="OTP"
                              required
                              value={otp}
                              onChange={(e) => setOtp(e.target.value)}
                            />
                        </div>
                      </div>
                          <div>
                              <p className="text-sm font-bold text-red-700">{isValid}</p>
                          </div>
                          <div className=''>
                              <button
                                type="submit"
                                onClick={handleLogin} disabled={!phoneNumber || !otp}
                                className="inline-flex w-full items-center justify-center rounded-md bg-black md:bg-[#5F0F40] px-3.5 py-1 lg:py-2.5 font-semibold leading-7 text-white hover:bg-black/80 mt-3 lg:mt-0"
                              >Sign In
                              </button>
                          </div>
                          </div>
                </form>
                <button
                    type="submit"
                    className="mt-3 w-full items-center justify-center rounded-md bg-black md:bg-[#5F0F40] px-3.5 py-1  lg:py-2.5 font-semibold leading-7 text-white hover:bg-black/80 mb-7 lmobile:mb-3 md:mb-0"
                    onClick={SignInWithGoogle}>
                    Sign in with Google
                </button> 
                
            </div>
            </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Login