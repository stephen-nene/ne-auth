import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTiktok, FaXTwitter, FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { message } from "antd";
import leaf from '../../assets/images/tech1.jpeg';

export default function Forgot({ darkMode }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeChange = () => {
        setRememberMe((prevRememberMe) => !prevRememberMe);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is missing data
        if (!email || !password) {
            message.error("Please fill in all fields");
            return;
        }

        // Log in the user
        console.log("Login credentials:", { email, password, rememberMe });
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
                    <img src={leaf} className="mt-3 mx-auto max-w-[600px] h-auto" alt="Leaf" />
                    <p className={`text-lg ${darkMode ? '' : 'text-gray-300'} mt-2`}>Empowering sustainable solutions for a brighter tomorrow.</p>
                </div>
            </div>

            {/* Right Side */}
            <div className={`flex flex-col justify-center w-full lg:w-1/2  ${darkMode ? 'bg-gray-300' : 'bg-gray-800'} p-8`}>
                <h1 className="text-3xl font-bold mb-4">Forgot Something?</h1>
                <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : ''} mb-8`}>
                    Enter your email below to receive a reset link.
                </p>

                {/* Login Form */}
                <form className="grid gap-4" onSubmit={handleSubmit}>
                    <input
                        className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Remember Me Checkbox */}
                    <div className="flex items-center justify-between">
                        {/* <label className="flex items-center text-sm">
                            <input type="checkbox" className="mr-2" checked={rememberMe} onChange={handleRememberMeChange} />
                            <span className={`${darkMode ? 'text-gray-800' : 'text-gray-300'}`}>Remember me</span>
                        </label> */}
                        <p className={` ${darkMode ? 'text-gray-700' : 'text-gray-200'} `}>
                            Already registered ? {" "}
                            <Link to="/login" className={`text-blue-500 ${darkMode ? 'dark:text-blue-400' : ''}`} >
                                Login
                            </Link>
                        </p>

                    </div>

                    {/* Login Button */}
                    <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}>
                        Reset
                    </button>
                </form>

                {/* Not Registered */}
                <div className="my-7">
                    <p className={` ${darkMode ? 'text-gray-700' : 'text-gray-200'} `}>Not registered? <Link to="/register" className={`text-blue-500 ${darkMode ? 'dark:text-blue-400' : ''}`}>Create an account</Link></p>
                </div>


            </div>
        </div>
    );
}
