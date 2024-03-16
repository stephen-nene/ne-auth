import React from "react";
import { Link } from "react-router-dom";

import leaf from '../../assets/images/tech1.jpeg'

export default function Login({ darkMode }) {
    return (
        <div className="flex justify-center h-screen">
            <div className={`hidden lg:flex w-full lg:w-1/2 items-center justify-center ${darkMode ? 'bg-gray-100' : 'bg-gray-700'}`}>
                <div className="p-6 rounded-md ">
                    <h1 className="text-4xl font-bold ">Welcome back to</h1>
                    <span className="text-6xl font-semibold text-white transform -translate-y-1/2 mb-2">
                        <span className="text-orange-600">Eco</span>
                        <span className="text-green-600">Blazz</span>
                    </span>
                    <img src={leaf} className="mt-3 " alt="" />
                    <p className={`text-lg ${darkMode?'':'text-gray-300'} mt-2`}>Empowering sustainable solutions for a brighter tomorrow.</p>

                </div>
            </div>

            <div className={`flex flex-col justify-center w-full lg:w-1/2 bg-white ${darkMode ? 'bg-gray-300' : 'bg-gray-800'} p-8`}>
                <h1 className="text-3xl font-bold mb-4">Sign in to your account</h1>
                <p className={`text-gray-600 ${darkMode ? 'dark:text-gray-400' : ''} mb-8`}>
                    Continue on your path in our platform.
                </p>

                <form className="grid gap-4">
                    <input className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`} type="text" placeholder="Enter your email" />
                    <input className={`border border-gray-300  rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`} type="password" placeholder="Password" />

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="mr-2" />
                            <span className={`${darkMode ? 'text-gray-800' : 'text-gray-300'}`}>Remember me</span>
                        </label>
                        <Link to="/forgot-password" className={`text-blue-500 ${darkMode ? 'text-blue-400' : ''}`}>Forgot password?</Link>
                    </div>

                    <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}>
                        Sign in
                    </button>
                </form>

                <div className="mt-4">
                    <p className={`text-gray-600 ${darkMode ? 'text-gray-700' : 'text-gray-200'} `}>Not registered? <Link to="/register" className={`text-blue-500 ${darkMode ? 'dark:text-blue-400' : ''}`}>Create an account</Link></p>
                </div>
            </div>
        </div>
    );
}
