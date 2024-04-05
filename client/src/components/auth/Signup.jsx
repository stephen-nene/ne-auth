import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTiktok, FaXTwitter, FaInstagram, FaGithub, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { message, Alert } from "antd";
import axios from 'axios';
import { useDispatch } from "react-redux";

import leaf from '../../assets/images/tech1.jpeg';
import {handleServerSignup} from "../utils/ServerCom"

export default function Signup({ darkMode }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible((prevState) => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is missing data
        if (!username || !email || !password || !confirmPassword) {
            message.error("Please fill in all fields");
            return;
        }

        const userData = { username, email, password };

        handleServerSignup(userData,setError,dispatch,navigate);

    };

    return (
        <div className="flex justify-center h-screen">
            {/* Left Side */}
            <div className={`hidden lg:flex w-full lg:w-1/2 items-center justify-center ${darkMode ? 'bg-gray-100' : 'bg-gray-700'}`}>
                {/* Left Side Content */}
                <div className="p-6 rounded-md">
                    <h1 className="text-4xl font-bold">Welcome to</h1>
                    <span className="text-6xl font-semibold text-white transform -translate-y-1/2 mb-2">
                        <span className="text-orange-600">Eco</span>
                        <span className="text-green-600">Blazz</span>
                    </span>
                    <img src={leaf} className="mt-3 mx-auto max-w-full h-auto" alt="Leaf" />
                    <p className={`text-lg ${darkMode ? '' : 'text-gray-300'} mt-2`}>Empowering sustainable solutions for a brighter tomorrow.</p>
                </div>
            </div>

            {/* Right Side */}
            <div className={`flex flex-col justify-center w-full lg:w-1/2  ${darkMode ? 'bg-gray-300' : 'bg-gray-800'} p-8`}>
                <h1 className={`text-3xl font-bold ${darkMode ? 'black' : 'text-white'} mb-4`}>Create an account</h1>
                <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : ''} mb-8`}>
                    Start a new path in our platform.
                </p>

                {/* Signup Form */}
                <form className="grid gap-4" onSubmit={handleSubmit}>
                    <input className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`} type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`} type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    {/* Password Field */}
                    <div className="relative">
                        <input className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full`} type={passwordVisible ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {passwordVisible ? <FaEyeSlash className="absolute inset-y-3 right-6 cursor-pointer" onClick={togglePasswordVisibility} /> : <FaEye className="absolute inset-y-3 right-6 cursor-pointer" onClick={togglePasswordVisibility} />}
                    </div>

                    {/* Confirm Password Field */}
                    <div className="relative">
                        <input className={`border border-gray-300 rounded-md py-2 w-full px-3 focus:outline-none focus:border-blue-500 `} type={confirmPasswordVisible ? "text" : "password"} placeholder="Password confirmation" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        {confirmPasswordVisible ? <FaEyeSlash className="absolute inset-y-3 right-6 flex items-center cursor-pointer" onClick={toggleConfirmPasswordVisibility} /> : <FaEye className="absolute inset-y-3 right-6 flex items-center cursor-pointer" onClick={toggleConfirmPasswordVisibility} />}
                    </div>

                    {/* Register Button */}
                    <button type="submit" className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}>
                        Register
                    </button>
                </form>
                {error && (
                    <div>
                        {Array.isArray(error) ? (
                            <ul className={`mt-4 text-rose-600 ${darkMode ? 'text-gray-400' : ''}`}>
                                {error && error.map((errMsg, index) => (
                                    <Alert key={index} message={errMsg} type="error" showIcon />
                                ))}
                            </ul>
                        ) : (
                            <p className={`mt-4 text-rose-600 ${darkMode ? 'text-gray-400' : ''}`}>
                                {error}
                            </p>
                        )}
                    </div>
                )}


                {/* Already Registered */}
                <div className="my-7">
                    <p className={` ${darkMode ? 'text-gray-700' : 'text-gray-200'} `}>Already registered? <Link to="/login" className={`text-blue-500 ${darkMode ? 'dark:text-blue-400' : ''}`}>Login instead</Link></p>
                </div>

                {/* Continue with Social Media */}
                <div className="mt-8 text-center">
                    <hr className={`w-3/4 mx-auto border-t border-gray-950 ${darkMode ? 'text-gray-800' : 'text-gray-300'} opacity-50`} />
                    <p className={`text-sm text-gray-500 ${darkMode ? 'text-gray-700' : 'text-gray-300'} relative inline-block px-4  ${darkMode ? 'bg-gray-300' : 'bg-gray-800'} -top-[14px]`}>Or continue with</p>
                    <div className="text-3xl flex justify-center mt-4">
                        <button className={`rounded-full bg-white hover:bg-gray-900 text-white p-3 ${darkMode ? ' text-gray-900' : ''}`}>
                            <FcGoogle onClick={() => message.info('Coming soon')} />
                        </button>
                        <button className={`rounded-full bg-blue-500 hover:bg-blue-700 text-white ml-4 p-3 ${darkMode ? ' text-gray-900' : ''}`}>
                            <FaFacebookF onClick={() => message.info('Coming soon')} />
                        </button>
                        <button className={`rounded-full bg-gray-600 hover:bg-black text-white p-3 ml-4 ${darkMode ? ' text-gray-900' : ''}`}>
                            <FaXTwitter onClick={() => message.info('Coming soon')} />
                        </button>
                        <button className={`rounded-full bg-rose-500 hover:bg-rose-700 text-white p-3 ml-4 ${darkMode ? ' text-gray-900' : ''}`}>
                            <FaInstagram onClick={() => message.info('Coming soon')} />
                        </button>
                        <button className={`rounded-full bg-sky-500 hover:bg-sky-700 text-white p-3 ml-4 ${darkMode ? ' text-gray-900' : ''}`}>
                            <FaGithub onClick={() => message.info('Coming soon')} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
