import React from "react";

export default function Footer() {
    return (
        <footer className="text-white py-8 w-full">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  justify-items-center gap-4">

                <div className="w-full  mb-4 md:mb-0">
                    <h2 className="text-xl font-bold">HOME <span className="text-yellow-400">MEAL</span></h2>
                    <p className="text-gray-500">Your Tagline here</p>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">About Us</h3>
                        <p className="text-gray-500">We want to help bring talented students and unique startups together.</p>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <p className="flex items-center">
                            <i className="fas fa-phone-alt mr-2"></i> +91 9999 999 999
                        </p>
                        <p className="flex items-center">
                            <i className="fas fa-envelope mr-2"></i> youremailid.com
                        </p>
                    </div>
                </div>

                <div className="w-full mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold text-yellow-400">Information</h3>
                    <ul>
                        <li className="mt-2">About Us</li>
                        <li className="mt-2">More Search</li>
                        <li className="mt-2">Blog</li>
                        <li className="mt-2">Testimonials</li>
                        <li className="mt-2">Events</li>
                    </ul>
                </div>

                <div className="w-full mb-4 md:mb-0 sm:mt-5 md:mt-0">
                    <h3 className="text-lg font-semibold text-yellow-400">Helpful Links</h3>
                    <ul>
                        <li className="mt-2">Services</li>
                        <li className="mt-2">Supports</li>
                        <li className="mt-2">Terms & Condition</li>
                        <li className="mt-2">Privacy Policy</li>
                    </ul>
                </div>

                <div className="w-full sm:mt-5 md:mt-0">
                    <h3 className="text-lg font-semibold text-yellow-400">Subscribe More Info</h3>
                    <div className="mt-4">
                        <div className="flex items-center bg-white rounded-lg px-2 py-1">
                            <input
                                type="text"
                                placeholder="Enter your Name"
                                className="bg-transparent focus:outline-none text-black"
                            />
                        </div>
                        <div className="flex items-center bg-white rounded-lg px-2 py-1 mt-3">
                            {/* <i className="fas fa-envelope text-black mr-2"></i> */}
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="bg-transparent focus:outline-none text-black"
                            />
                        </div>
                        <div className="mt-3 rounded-full">
                            <textarea
                                placeholder="Your Message"
                                className="bg-transparent rounded-lg focus:outline-none text-black bg-white w-full h-32 resize-none p-2"
                            />
                        </div> 
                        <button className="mt-2 duration-300 font-bold bg-yellow-400 border border-yellow-400 hover:bg-black hover:text-yellow-400 text-black px-4 py-1 rounded-lg  w-full">Subscribe</button>
                    </div>
                </div>

            </div>

            <div className="container mx-auto px-4 mt-8 flex justify-between items-center">
                <div className="text-gray-500">
                    © 2018 company.Ltd. All Right reserved
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-orange-400">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-orange-400">
                        <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a href="#" className="text-orange-400">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-orange-400">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-4 flex justify-end">
                <a href="#" className="text-orange-400">
                    <i className="fas fa-arrow-up"></i>
                </a>
            </div>

        </footer>
    );
}