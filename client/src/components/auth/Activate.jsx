import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTiktok, FaXTwitter, FaEye, FaEyeSlash, FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { message } from "antd";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import leaf from '../../assets/images/tech2.jpeg';

import { handlePasswordUpdate } from '../utils/ServerCom'
import { validateToken } from "../utils/ServerCom";

export default function Activate({ darkMode }) {
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [servermessage, setServerMessage] = useState("")
    const { token } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        validateToken(token, setError, setServerMessage, setLoading);

    }, [token]);


    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is missing data
        if (!password || !confirmPassword) {
            message.success("Please fill in all fields");
            return;
        }
        handlePasswordUpdate(token, password, navigate, setError, dispatch);

        console.log("User data:", { password, confirmPassword });
    };


    return (
        <div className="flex justify-center h-screen">
            {/* Left Side */}
            <div className={`hidden lg:flex w-full lg:w-1/2 items-center justify-center ${darkMode ? 'bg-gray-100' : 'bg-gray-700'}`}>
                {/* Left Side Content */}
                <div className="p-6 rounded-md">
                    <h1 className="text-4xl font-bold">Welcome back to</h1>
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
                {loading ? (
                    <div className={`${darkMode ? 'text-black' : 'text-white'}`}>
                        <p>Please wait as we Validate the reset link .....</p>
                    </div>
                ) : (
                    !error ?

                        <div className="">
                            <h1 className="text-3xl font-bold mb-4">Account activated successfully?</h1>
                            <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : ''} my-3`}>
                                Redirecting you soon ....
                            </p>


                            {servermessage &&
                                <>
                                    <p className={`text-green-600 mb-8 ${darkMode ? 'text-gray-400' : ''} `}>
                                        {servermessage}
                                    </p>
                                </>
                            }

                        </div>
                        :
                        <div className="">
                            <h1 className="text-3xl font-bold mb-4">Error?</h1>
                            <p className={`text-rose-600 ${darkMode ? 'text-gray-400' : ''} mb-8`}>
                                {error}
                            </p>

                            {/* Reset Form */}
                            <form onSubmit={handleSubmit}>

                                <p className={` ${darkMode ? 'text-gray-700' : 'text-gray-200'} `}>Try to{" "}
                                    <Link to="/" className={`text-blue-500 ${darkMode ? 'dark:text-blue-400' : ''}`} >
                                        Activate
                                    </Link> your account again  {" "}

                                </p>
                                {/* Login Button */}

                            </form>
                        </div>

                )}
            </div>

        </div>
    );
}
