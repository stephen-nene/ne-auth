import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTiktok, FaXTwitter, FaEye, FaEyeSlash, FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { message } from "antd";
import leaf from '../../assets/images/tech2.jpeg';

export default function Reset({ darkMode }) {
    const [error, serError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible((prevState) => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is missing data
        if (!password || !confirmPassword) {
            message.error("Please fill in all fields");
            return;
        }

        // Log user data to console
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
                            <h1 className="text-3xl font-bold mb-4">Reset Your Password?</h1>
                            <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : ''} mb-8`}>
                                Change your password to a new one.
                            </p>

                            {/* Reset Form */}
                            <form className="grid gap-4" onSubmit={handleSubmit}>


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
                                {!message &&
                                    <>
                                        <p className={`text-green-600 ${darkMode ? 'text-gray-400' : ''} `}>
                                            Successfully reset your password .
                                        </p>
                                        <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : ''} mb-8`}>
                                            You are now logged in.
                                        </p>
                                    </>
                                }
                                {/* Login Button */}
                                <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}>
                                    Submit
                                </button>
                            </form>
                        </div>
                        :
                        <div className="">
                            <h1 className="text-3xl font-bold mb-4">Error?</h1>
                            <p className={`text-rose-600 ${darkMode ? 'text-gray-400' : ''} mb-8`}>
                                The reset link you used is invalid.
                            </p>

                            {/* Reset Form */}
                            <form onSubmit={handleSubmit}>

                                <p className={` ${darkMode ? 'text-gray-700' : 'text-gray-200'} `}>Try to{" "}
                                    <Link to="/forgot" className={`text-blue-500 ${darkMode ? 'dark:text-blue-400' : ''}`} >
                                        Reset
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
