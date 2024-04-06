import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import { handleServerLogout } from "../utils/ServerCom"

export default function Profile({ darkMode }) {
    const data = useSelector((state) => state.user.userData);
    const userData = data.user || {};
    const [update, setUpdate] = useState(false)

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profilePic, setProfilePic] = useState(userData.profile_pic || "https://via.placeholder.com/170");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    // console.log(update)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible((prevState) => !prevState);
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePic(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={`p-6 ${darkMode ? 'bg-white text-gray-500' : 'bg-gray-950 text-gray-200'} min-h-screen`}>
            <h3 className="text-3xl font-bold mb-4">Profile Settings</h3>
            <p className="text-lg mb-6 text-gray-600">Control your profile setup and details</p>
            <div className="flex text-sky-700 gap-5 text-xl  font-semibold ml-11">
                <h3
                    onClick={() => setUpdate(false)}
                    className={`hover:text-sky-500 hover:cursor-pointer ${!update && "text-rose-800 text-2xl "}`}>
                    Profile</h3>

                <h3
                    onClick={() => setUpdate(true)}
                    className={` hover:text-sky-500 hover:cursor-pointer ${update && "text-rose-800 text-2xl "}`}>
                    Update</h3>
            </div>
            <hr className={`w-80 my-3 ml-5 border-t  ${darkMode ? 'border-gray-950 ' : 'text-gray-100'} opacity-100`} />
            {!update ? <>
                {/* Profile Details Section */}
                <div className={`mb-8 ${darkMode ? "bg-slate-200" : "bg-slate-900"} p-3 rounded-xl`}>
                    <h3 className="text-2xl font-bold mb-4">Profile Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> {/* Use single column on small screens and two columns on medium screens and above */}
                        <div>
                            <p className="text-gray-600">Username:</p>
                            <p className="font-semibold">{userData.username}</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Email:</p>
                            <p className="font-semibold">{userData.email}</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Phone Number:</p>
                            <p className="font-semibold">{userData.number || "null"}</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Full Name:</p>
                            <p className="font-semibold">{userData.first_name} {userData.last_name ?? "null"}</p>
                        </div>
                        {/* <div>
                            <p className="text-gray-600">Location:</p>
                            <p className="font-semibold">{userData.location || "null"}</p>
                        </div> */}
                        <div>
                            <p className="text-gray-600">Role:</p>
                            <p className="font-semibold">{userData.role || "null"}</p>
                        </div>
                    </div>
                    <div className="my-4 img rounded-full sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%]"> {/* Adjust image width based on screen size */}
                        <h3 className="text-2xl font-bold mb-4">Profile Picture</h3>
                        {/* <img src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile" className="rounded-lg w-full" /> Make the image responsive */}
                        <img
                            src={userData.profile_pisc || "https://via.placeholder.com/170"} // Use a placeholder image if profile_pic is not available
                            alt="Profile"
                            className="rounded-lg w-full"
                        />
                    </div>
                </div>
            </> : <>
                {/* Profile udate Section */}
                <div className={`mb-8 ${darkMode ? "bg-slate-200" : "bg-slate-900"} p-3 rounded-xl`}>
                    <h3 className="text-2xl font-bold mb-4">Update Profile </h3>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${!darkMode ? 'text-gray-900' : ''}`}> {/* Use single column on small screens and two columns on medium screens and above */}
                        <div className={`flex flex-col `}>
                            <label htmlFor="username" className="text-gray-500 mb-1">Username:</label>
                            <input
                                type="text"
                                id="username"
                                placeholder={userData.username}
                                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-gray-500 mb-1">Email:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder={userData.email}
                                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phoneNumber" className="text-gray-500 mb-1">Phone Number:</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                placeholder={userData.number}
                                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="firstName" className="text-gray-500 mb-1">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder={userData.first_name}
                                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName" className="text-gray-500 mb-1">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder={userData.last_name}
                                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-">
                            <label htmlFor="lastName" className="text-gray-500 mb-2">Password:</label>
                            <div className="relative">

                                <input
                                    className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full`}
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                {passwordVisible ? (
                                    <FaEyeSlash className="absolute inset-y-3 right-6 cursor-pointer" onClick={togglePasswordVisibility} />
                                ) : (
                                    <FaEye className="absolute inset-y-3 right-6 cursor-pointer" onClick={togglePasswordVisibility} />
                                )}
                            </div>

                            {/* Confirm Password Field */}
                            <label htmlFor="lastName" className="text-gray-500 my-2">Confirm Password:</label>
                            <div className="relative">
                                <input
                                    className={`border border-gray-300 rounded-md py-2 w-full px-3 focus:outline-none focus:border-blue-500`}
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    placeholder="Password confirmation"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {confirmPasswordVisible ? (
                                    <FaEyeSlash className="absolute inset-y-3 right-6 flex items-center cursor-pointer" onClick={toggleConfirmPasswordVisibility} />
                                ) : (
                                    <FaEye className="absolute inset-y-3 right-6 flex items-center cursor-pointer" onClick={toggleConfirmPasswordVisibility} />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="my-4 img rounded-full sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%]"> {/* Adjust image width based on screen size */}
                        <h3 className="text-2xl font-bold mb-4">Profile Picture</h3>
                        <input
                            type="file"
                            name=""
                            id="fileInput"
                            accept="image/*"  // Limit to image files only
                            style={{ display: "none" }}  // Hide the input element
                            onChange={handleImageChange} // Handle file selection
                        />
                        <img
                            src={profilePic} // Use a placeholder image if profile_pic is not available
                            alt="Profile"
                            className="rounded-lg w-full hover:opacity-30 transition-opacity duration-300"
                            style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" }} // Add box shadow effect
                            onClick={() => document.getElementById("fileInput").click()} // Trigger file input click event
                        />
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mb-8">
                        Submit
                    </button>
                </div>
            </>}





            {/* Logout Button */}
            <button onClick={() => handleServerLogout(dispatch, navigate)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mb-8">
                Logout
            </button>


        </div>
    );
}
