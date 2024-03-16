import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { setDarkMode } from "../assets/store/actions/appAction";

export default function Navbar() {

    const darkMode = useSelector((state) => state.app.darkMode);
    const dispatch = useDispatch();

    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-10 ">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-2">
                    <Link to="/" className="text-xl font-bold">Eblazz</Link>
                    <div className="flex items-center space-x-4">
                        <Link to="/profile" className="text-gray-700 hover:text-gray-900">Profile</Link>
                        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Get Started</Link>
                    </div>
                    <div className="right">
                        {darkMode ?
                            (

                                <button
                                    onClick={() => {
                                        dispatch(setDarkMode());
                                    }}
                                    className="p-2 text-xl border-2 hover:bg-slate-700 bg-slate-600 rounded-lg"
                                >
                                    <MdDarkMode size={25} />
                                </button>
                            ) :
                            <button
                                onClick={() => {
                                    dispatch(setDarkMode());
                                }}
                                className="p-2 text-xl border-2 hover:bg-yellow-500 bg-yellow-600 rounded-lg"
                            >
                                <MdLightMode size={25} />
                            </button>
                        }

                    </div>
                </nav>
            </div>
        </header>
    );
}