import React from "react";
import { Link } from "react-router-dom";

export default function Activate({darkMode}) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className={`text-5xl ${darkMode?' text-gray-900':' text-gray-200'} font-bold mb-4`}>Account not activated</h1>
            <p className="text-xl text-gray-600 mb-3">An email was sent to your inbox with instructions .</p>
            <p className="text-lg text-gray-600 mb-8">You have 5 days to activate it else your account will be revoked .</p>
          
            {/* <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Go to Login</Link> */}
        </div>
    );
}
