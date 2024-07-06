import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <div className="parent w-full h-[80px] flex justify-between align-middle py-5 font-sans sm:px-[80px] px-[40px] text-lg">
                <div className="logo font-extrabold text-2xl sm:text-xl">
                    <h1>HOME <span className="text-yellow-400">MEALS</span></h1>
                </div>
                <div className="buttons hidden sm:flex gap-4">
                    <a href="#" className='hover:text-yellow-500 translate-all ease-in-out duration-500'>Home</a>
                    <a href="#" className='hover:text-yellow-500 translate-all ease-in-out duration-500'>Menu</a>
                    <a href="#" className='hover:text-yellow-500 translate-all ease-in-out duration-500'>Categories</a>
                    <a href="#" className='hover:text-yellow-500 translate-all ease-in-out duration-500'>About</a>
                </div>

                <div className="form px-3 pb-1 hidden sm:flex justify-center items-center hover:bg-orange-400 hover:text-black font-bold text-orange-300 border border-orange-300 rounded-full cursor-pointer  transition-all ease-in-out duration-500">
                    <h1>Login/SignUp</h1>
                </div>

                {/* mobile nav menu  */}
                <div className="sm:hidden flex flex-col align-middle justify-center gap-1">
                    <div className="w-6 h-0.5 rounded-full bg-white transition-all duration-200 ease"></div>
                    <div className="w-6 h-0.5 rounded-full bg-white transition-all duration-200 ease"></div>
                    <div className="w-6 h-0.5 rounded-full bg-white transition-all duration-200 ease"></div>
                </div>

            </div>

            {/* mobile complte nav menu  */}
            <div className="backdrop-blur-lg sm:hidden font-sans p-10 text-[1.4rem] h-[100vh] w-full absolute top-[80px] z-10">
                <div className="buttons flex flex-col gap-5">
                    <a href="#" className="hover:text-yellow-500 transition-all ease-in-out duration-500">Home</a>
                    <a href="#" className="hover:text-yellow-500 transition-all ease-in-out duration-500">Menu</a>
                    <a href="#" className="hover:text-yellow-500 transition-all ease-in-out duration-500">Categories</a>
                    <a href="#" className="hover:text-yellow-500 transition-all ease-in-out duration-500">About</a>
                </div>
                <div className="form flex justify-center items-center hover:bg-orange-400 hover:text-white font-bold text-orange-300 border border-orange-300 rounded-full cursor-pointer transition-all ease-in-out duration-500 px-4 py-1 mt-10">
                    <h1>Login/SignUp</h1>
                </div>
            </div>






            {/* <div className="bg-gray-500 sm:hidden font-sans p-10 text-lg h-[90vh] w-full absolute">
                <div className="buttons flex flex-col gap-5 ">
                    <a href="#" className='hover:text-yellow-500 translate-all ease-in-out duration-500'>Home</a>
                    <a href="#" className='hover:text-yellow-500 translate-all ease-in-out duration-500'>Menu</a>
                    <a href="#" className='hover:text-yellow-500 translate-all ease-in-out duration-500'>Categories</a>
                    <a href="#" className='hover:text-yellow-500 translate-all ease-in-out duration-500'>About</a>
                </div>
                <div className="form w-[150px] flex justify-center align-middle hover:bg-orange-400 hover:text-white font-bold text-orange-300 border border-orange-300 rounded-full cursor-pointer  transition-all ease-in-out duration-500 px-4 py-1 mt-10">
                    <h1>Login/SignUp</h1>
                </div>
            </div> */}
        </>
    )
}