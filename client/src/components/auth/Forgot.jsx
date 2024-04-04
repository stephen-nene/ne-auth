import React, { useState } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import leaf from '../../assets/images/tech1.jpeg';
import {handleForgotPass} from '../utils/ServerCom'

export default function Forgot({ darkMode }) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            message.error("Please fill in all fields");
            return;
        }

        handleForgotPass(email, setMessage, setError);
        console.log("reset email", { email });
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
                {!message ? (

                    <div className="reset">

                        <h1 className="text-3xl font-bold mb-4">Forgot Something?</h1>
                        <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : ''} mb-8`}>
                            Enter your email below to receive a reset link.
                        </p>

                        {/* Login Form */}
                        <form className="grid gap-5 my-5" onSubmit={handleSubmit}>
                            <input
                                className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {error && 
                            <p className={`text-rose-600 ${darkMode ? 'text-gray-400' : ''} `}>
                                No account is associated with that email.
                            </p>
                            }
                            <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}>
                                Reset
                            </button>
                        </form>
                    </div>
                ) : (

                    <div className="message">
                        <h1 className="text-3xl font-bold mb-4">Forgot Something?</h1>
                        <p className={`text-green-600 ${darkMode ? 'text-gray-400' : ''} mb-8`}>
                            {/* An email has been sent to your inbox, Please check it. */}
                            {message.message}
                        </p>

                        {/* <p className={`text-rose-600 ${darkMode ? 'text-gray-400' : ''} mb-8`}>
                            No account is associated with that email.
                        </p> */}
                    </div>
                )}

                <div className="flex items-center justify-between mt-4">
                    <p className={` ${darkMode ? 'text-gray-700' : 'text-gray-200'} `}>
                        Already registered ? {" "}
                        <Link to="/login" className={`text-blue-500 ${darkMode ? 'dark:text-blue-400' : ''}`} >
                            Login
                        </Link>
                    </p>

                </div>

                <div className="my-7">
                    <p className={` ${darkMode ? 'text-gray-700' : 'text-gray-200'} `}>Not registered? <Link to="/register" className={`text-blue-500 ${darkMode ? 'dark:text-blue-400' : ''}`}>Create an account</Link></p>
                </div>


            </div>
        </div>
    );
}
