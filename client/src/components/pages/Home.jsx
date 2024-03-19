import React from "react";
import { Link } from "react-router-dom";

export default function Home({ darkmode }) {
    return (
        <div className={`-3 ${darkmode ? 'bg-gray-100' : 'bg-gray-950 text-white'} min-h-screen`}>

      {/* Hero Section */}
      <section className={`${darkmode?'bg-':'bg-gray-7'}  text-center py-20`}>
        <h1 className="text-5xl font-bold mb-4">Welcome to Your AuthAppp</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis eget nunc ut consequat.</p>
        <button className="bg-sky-500 text-gray-900 px-6 py-2 rounded-full mt-8 hover:bg-sky-600"><Link to={'/login'}>Get Started</Link></button>
      </section>

            {/* Features Section */}
            <section className="py-12 px-8">
                <h2 className="text-2xl font-bold mb-6">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Add feature cards here */}
                    <div className={`${darkmode?'bg-white':'bg-gray-700'} p-6 rounded-lg shadow-md`}>
                        <h3 className="text-xl font-bold mb-4">Feature 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={`${darkmode?'bg-white':'bg-gray-700'} p-6 rounded-lg shadow-md`}>
                        <h3 className="text-xl font-bold mb-4">Feature 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={`${darkmode?'bg-white':'bg-gray-700'} p-6 rounded-lg shadow-md`}>
                        <h3 className="text-xl font-bold mb-4">Feature 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-12 px-8">
                <h2 className="text-2xl font-bold mb-6">About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim dolor eget mauris eleifend, eget luctus urna ultrices. Cras in magna nec lacus eleifend tincidunt.</p>
            </section>

            {/* Contact Section */}
            {/* <section className="py-12 px-8">
                <h2 className="text-2xl font-bold mb-6">Contact</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                        <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                </form>
            </section> */}

        </div>
    );
}
