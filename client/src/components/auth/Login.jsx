import React from "react";
import { Link } from "react-router-dom";

import { FaTiktok, FaXTwitter, FaInstagram, FaGithub, FaFacebookF, } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import {message} from "antd"


import leaf from '../../assets/images/tech1.jpeg'

export default function Login({ darkMode }) {
    return (
        <div className="flex justify-center h-screen">
            <div className={`hidden lg:flex w-full lg:w-1/2 items-center justify-center ${darkMode ? 'bg-gray-100' : 'bg-gray-700'}`}>
                <div className="p-6 rounded-md ">
                    <h1 className="text-4xl font-bold">Welcome back to</h1>
                    <span className="text-6xl font-semibold text-white transform -translate-y-1/2 mb-2">
                        <span className="text-orange-600">Eco</span>
                        <span className="text-green-600">Blazz</span>
                    </span>
                    <img src={leaf} className="mt-3 mx-auto max-w-[600px] h-auto" alt="Leaf" />
                    <p className={`text-lg ${darkMode ? '' : 'text-gray-300'} mt-2`}>Empowering sustainable solutions for a brighter tomorrow.</p>
                </div>
            </div>

            <div className={`flex flex-col justify-center w-full lg:w-1/2  ${darkMode ? 'bg-gray-300' : 'bg-gray-800'} p-8`}>
                <h1 className="text-3xl font-bold mb-4">Sign in to your account</h1>
                <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : ''} mb-8`}>
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

                <div className="my-7">
                    <p className={` ${darkMode ? 'text-gray-700' : 'text-gray-200'} `}>Not registered? <Link to="/register" className={`text-blue-500 ${darkMode ? 'dark:text-blue-400' : ''}`}>Create an account</Link></p>
                </div>
                <div className="mt-8 text-center">
                    <hr className={`w-3/4 mx-auto border-t border-gray-950 ${darkMode ? 'text-gray-800' : 'text-gray-300'} opacity-50`} />
                    <p className={`text-sm text-gray-500 ${darkMode ? 'text-gray-700' : 'text-gray-300'} relative inline-block px-4  ${darkMode ? 'bg-gray-300' : 'bg-gray-800'} -top-[14px]`}>Or continue with</p>
                    <div className="text-3xl flex justify-center mt-4">
                        <button className={`rounded-full bg-white hover:bg-gray-900 text-white p-3 ${darkMode ? ' text-gray-900' : ''}`}>
                            <FcGoogle onClick={()=>message.info('comming soon')}/>
                        </button>

                        <button className={`rounded-full bg-blue-500 hover:bg-blue-700 text-white ml-4 p-3 ${darkMode ? ' text-gray-900' : ''}`}>
                            <FaFacebookF onClick={()=>message.info('comming soon')} />
                        </button>
                        <button className={`rounded-full bg-gray-600 hover:bg-black text-white p-3 ml-4 ${darkMode ? ' text-gray-900' : ''}`}>
                            <FaXTwitter onClick={()=>message.info('comming soon')}/>
                        </button>
                        <button className={`rounded-full bg-rose-500 hover:bg-rose-700 text-white p-3 ml-4 ${darkMode ? ' text-gray-900' : ''}`}>
                            <FaInstagram onClick={()=>message.info('comming soon')}/>
                        </button>
                        <button className={`rounded-full bg-sky-500 hover:bg-sky-700 text-white p-3 ml-4 ${darkMode ? ' text-gray-900' : ''}`}>
                            <FaGithub onClick={()=>message.info('comming soon')}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
