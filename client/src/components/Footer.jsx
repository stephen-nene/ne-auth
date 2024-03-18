import React from "react";
import { FaTiktok, FaXTwitter, FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function Footer({ darkMode }) {
    return (
        <footer className={`${darkMode ? "bg-sky-500" : "bg-sky-950 text-white"}`}>



            <div className="mx-auto w-full max-w-screen-xl">
                <div className=" grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 className={`mb-6 text-sm font-semibold ${darkMode ? 'text-gray-900' : 'text-white'} uppercase`}>Company</h2>
                        <ul className={`${darkMode ? "text-gray-100" : "text-gray-400"}  font-medium`}>
                            <li className="mb-4">
                                <Link className=" hover:underline">About</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="hover:underline">Careers</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="hover:underline">Brand Center</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="hover:underline">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase">Help center</h2>
                        <ul className={`${darkMode ? "text-gray-100" : "text-gray-400"}  font-medium`}>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Discord Server</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                        <ul className={`${darkMode ? "text-gray-100" : "text-gray-400"}  font-medium`}>
                            <li className="mb-4">
                                <Link className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="hover:underline">Licensing</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="hover:underline">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase">Download</h2>
                        <ul className={`${darkMode ? "text-gray-100" : "text-gray-400"}  font-medium`}>
                            <li className="mb-4">
                                <Link className="hover:underline">iOS</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="hover:underline">Android</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="hover:underline">Windows</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="hover:underline">Linux</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className={`px-4 py-6 ${darkMode ? "bg-sky-200" : "bg-sky-900 text-gray-300"} md:flex md:items-center md:justify-between rounded-lg`}>
            <span className="text-sm t sm:text-center">© 2024
                <a href="https://ecoblazz.onrender.com/" target="_blank" rel="noopener noreferrer">EcoBlazz™</a>
                . All Rights Reserved.
            </span>
            <div className={`  flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse`}>
                <Link to="#" target="_blank" className={`text-gray-400 ${!darkMode?'hover:text-white':'hover:text-blue-500'}`}>
                    <FaFacebookF />
                    <span className="sr-only">Facebook page</span>
                </Link>
                <Link to="#" target="_blank" className={`text-gray-400 ${!darkMode?'hover:text-white':'hover:text-rose-500'}  `}>
                    <FaInstagram />
                    <span className="sr-only">Insta</span>
                </Link>
                <Link to="https://twitter.com/EcoBlazz/" target="_blank" className={`text-gray-400 ${!darkMode?'hover:text-white':'hover:text-gray-950'}`}>
                    <FaXTwitter />
                    <span className="sr-only">Twitter page</span>
                </Link>
                <Link to="#" target="_blank" className={`text-gray-400 ${!darkMode?'hover:text-white':'hover:text-gray-900'}`}>
                    <FaGithub />
                    <span className="sr-only">GitHub account</span>
                </Link>
                <Link to="https://www.tiktok.com/@ecoblazz23" target="_blank" className={`text-gray-400 ${!darkMode?'hover:text-white':'hover:text-fuchsia-900'}`}>
                    <FaTiktok />
                    <span className="sr-only">Tiktok account</span>
                </Link>
            </div>
        </div>
            </div>

        </footer>
    );
}
