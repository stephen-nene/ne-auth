import React from "react";

const userData = {
    username: "johndoe",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
    fullName: "John Doe",
    location: "New York, USA",
};

export default function Profile({ darkMode }) {
    return (
        <div className={`p-6 ${darkMode ? 'bg-white text-gray-500' : 'bg-gray-950 text-gray-200'} min-h-screen`}>
            <h3 className="text-3xl font-bold mb-4">Profile Settings</h3>
            <p className="text-lg mb-6 text-gray-600">Control your profile setup and details</p>
            <div className="flex text-sky-700 gap-5 text-xl font-semiboldtext-xl font-semibold ml-11">
                <h3 className=" hover:text-sky-500 hover:cursor-pointer">Profile</h3>

                <h3 className=" hover:text-sky-500 hover:cursor-pointer">Update</h3>
            </div>
            <hr className={`w-80 my-3 ml-5 border-t  ${darkMode ? 'border-gray-950 ' : 'text-gray-100'} opacity-100`} />

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
            <p className="font-semibold">{userData.phoneNumber}</p>
        </div>
        <div>
            <p className="text-gray-600">Full Name:</p>
            <p className="font-semibold">{userData.fullName}</p>
        </div>
        <div>
            <p className="text-gray-600">Location:</p>
            <p className="font-semibold">{userData.location}</p>
        </div>
    </div>
    <div className="my-4 img rounded-full sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%]"> {/* Adjust image width based on screen size */}
        <h3 className="text-2xl font-bold mb-4">Profile Picture</h3>
        <img src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile" className="rounded-lg w-full" /> {/* Make the image responsive */}
    </div>
</div>
            {/* Profile Picture Section */}
            <div className="mb-8 ">
            </div>




            {/* Logout Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mb-8">
                Logout
            </button>


        </div>
    );
}
