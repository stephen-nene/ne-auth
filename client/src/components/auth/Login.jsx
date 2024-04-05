import React, { useState, useEffect } from "react";
import { FaXTwitter, FaEye, FaEyeSlash, FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


import { handleServerLogin } from '../utils/ServerCom'
import leaf from '../../assets/images/tech1.jpeg';

export default function Login({ darkMode, userData }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const [rememberMe, setRememberMe] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRememberMeChange = () => {
        setRememberMe((prevRememberMe) => !prevRememberMe);
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    useEffect(() => {
        if (userData && Object.keys(userData).length) {

            message.success(`Already Logged in as ${userData.user.username}`);
            // setTimeout(() => {
            //     navigate("/profile");
            // }, 5000);
        }
    }, [userData, navigate]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Destructure email, password, and rememberMe from state or wherever you store them

        // Check if any field is missing data
        if (!email || !password) {
            message.error("Please fill in all fields");
            return;
        }
        if (userData && Object.keys(userData).length){
            message.success(`Already Logged in as ${userData.user.username}`);
            setTimeout(() => {
                navigate("/profile");
            }, 2000); 
        }else{

            handleServerLogin(dispatch, { email, password, rememberMe }, navigate, setError)
        }
    };

    return (
        <div className="flex justify-center h-screen">
            {/* Left Side */}

            <div className={`hidden lg:flex w-full lg:w-1/2 items-center justify-center ${darkMode ? 'bg-gray-100' : 'bg-gray-700'}`}>
                {/* Left Side Content */}
                <div className="p-6 rounded-md text-center">
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
                {userData &&
                    <>
                    <div className="my-8">

          <Link
            to="/profile"
            className=" px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Head to Profile
          </Link>
                    </div>

                    </>}
                <h1 className={`text-3xl font-bold mb-4`}>Sign in to your account</h1>
                <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : ''} mb-8`}>
                    Continue on your path in our platform.
                </p>

                {/* Login Form */}
                <form className="grid gap-4  " onSubmit={handleSubmit}>

                    <input className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`} type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="relative">
                        <input className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full`} type={passwordVisible ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {passwordVisible ? <FaEyeSlash className="absolute inset-y-3 right-6 cursor-pointer" onClick={togglePasswordVisibility} /> : <FaEye className="absolute inset-y-3 right-6 cursor-pointer" onClick={togglePasswordVisibility} />}
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="mr-2" checked={rememberMe} onChange={handleRememberMeChange} />
                            <span className={`${darkMode ? 'text-gray-800' : 'text-gray-300'}`}>Remember me</span>
                        </label>
                        <Link to="/forgot" className={`text-blue-500 ${darkMode ? 'text-blue-400' : ''}`}>Forgot password?</Link>
                    </div>

                    {/* Login Button */}
                    <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}>
                        Sign in
                    </button>
                </form>
                {error &&
                    <p className={`mt-4 text-rose-600 ${darkMode ? 'text-gray-400' : ''} `}>
                        {error}
                    </p>
                }
                {/* Not Registered */}
                <div className="my-7">
                    <p className={` ${darkMode ? 'text-gray-700' : 'text-gray-200'} `}>Not registered? <Link to="/register" className={`text-blue-500 ${darkMode ? 'dark:text-blue-400' : ''}`}>Create an account</Link></p>
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
