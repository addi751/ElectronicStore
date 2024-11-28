    import React from 'react';
    import Header1 from '../components/Header1';
    import { FaFacebookF, FaGoogle } from 'react-icons/fa';

    const LoginPage = () => {
    return (
        <div className="min-h-screen" style={{ backgroundImage: `url('/images/desktop-wallpaper-tropical-leaf-prints-tropical-print-summer-wall-art-nursery-cute-summer-pattern-removebg-preview.png')` }}>
        
        {/* Header Section */}
        <Header1 />
        
        {/* Container for Login Card */}
        <div className="flex items-center justify-center mt-10">
            {/* Login Card with Increased Width and Height */}
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-7xl w-full flex flex-col md:flex-row items-center h-auto md:h-[650px]">
            
            {/* Left Side: Form & Header */}
            <div className="w-full md:w-2/5 flex flex-col">
                {/* Login Heading & Sign-up Option */}
                <div className="flex justify-between items-center w-full mb-6">
                <h2 className="text-3xl font-bold text-red-600">Sign in</h2>
                <a href="/signup" className="text-3xl font-bold text-gray-800 hover:underline">Sign up</a>
                
                </div>

                {/* Login Form */}
                <form className="w-full">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
                    <input
                    type="text"
                    id="username"
                    className="w-full px-4 py-2 border border-red-600 rounded-md focus:outline-none"
                    placeholder="Enter your username"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-red-600 rounded-md focus:outline-none"
                    placeholder="Enter your password"
                    />
                </div>

                {/* Forgot Password and Login Button */}
                <div className="flex justify-between items-center mb-6">
                    <a href="/forgot-password" className="text-sm text-gray-600 hover:underline">Forgot password?</a>
                    <button className="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-700 transition duration-300">
                    Login
                    </button>
                </div>
                </form>

                {/* Social Sign-in */}
                <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Or sign in with</p>
                            
                            <div className="flex justify-center space-x-4">
                <a href="#" className="text-red-500 hover:text-red-700">
                    <FaGoogle size={24} /> {/* Google Icon */}
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebookF size={24} /> {/* Facebook Icon */}
                </a>
                </div>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="w-full md:w-4/5 flex justify-center items-center mt-8 md:mt-0">
                <img
                src="images/Phone-Accessories-PNG-HD-Image-removebg-preview.png" // Replace with actual image path
                alt="Electronics"
                className="w-[900px] h-auto object-cover"
                />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default LoginPage;
