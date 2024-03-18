import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { setDarkMode } from "../assets/store/actions/appAction";

export default function Navbar() {

    const darkMode = useSelector((state) => state.app.darkMode);
    const dispatch = useDispatch();

    return (
        <header className={`fixed top-0 w-full ${darkMode ? 'bg-sky-500' : 'bg-sky-900'}  shadow-md z-10 `}>
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-3">
                    <Link to="/" className="text-xl font-bold">Eblazz</Link>
                    <div className="flex items-center space-x-4">
                        <Link to="/profile" className="text-gray-700 hover:text-gray-900">Profile</Link>
                        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Get Started</Link>
                    </div>
                    <div className="right ">
                        {darkMode ?
                            (
                                <MdDarkMode
                                    onClick={() => {
                                        dispatch(setDarkMode());
                                    }}
                                    className="text-gray-500 hover:text-gray-900 hover:cursor-pointer"
                                    size={35}
                                />
                            ) :

                            <MdLightMode
                                onClick={() => {
                                    dispatch(setDarkMode());
                                }}
                                className="  text-yellow-500 hover:text-yellow-600 hover:cursor-pointer"
                                size={35}
                            />
                        }

                    </div>
                </nav>
            </div>
        </header>
    );
}