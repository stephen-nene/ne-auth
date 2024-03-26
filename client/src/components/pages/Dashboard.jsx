import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";


export default function Dashboard() {

    const darkMode = useSelector((state) => state.app.darkMode);
    const dispatch = useDispatch();

    return (
        <div className={` ${darkMode ? 'bg-white' : 'bg-black'}  z-10 `}>
            <div className="p-8">

                <div className=" flex  items-cente justify-cente h-screen">
                    {/* <p>sss</p> */}
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Dash</h1>
                </div>
            </div>
        </div>
    );
}