"use client";
import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className="parent relative w-full h-[80px] flex justify-between align-middle py-5 font-sans md:px-[80px] px-[40px] text-lg z-*">
                <Link href="#" className="logo font-extrabold text-2xl md:text-xl">
                    <h1>HOME <span className="text-yellow-400">MEALS</span></h1>
                </Link>
                <div className="buttons hidden md:flex gap-4">
                    <a href="#" className='hover:text-yellow-400 translate-all ease-in-out duration-500'>Home</a>
                    <a href="#" className='hover:text-yellow-400 translate-all ease-in-out duration-500'>Menu</a>
                    <a href="#" className='hover:text-yellow-400 translate-all ease-in-out duration-500'>Categories</a>
                    <a href="#" className='hover:text-yellow-400 translate-all ease-in-out duration-500'>About</a>
                </div>

                <div className="form px-3 pb-1 hidden md:flex justify-center items-center hover:bg-yellow-400 hover:text-black font-bold text-yellow-400 border border-yellow-400 rounded-full cursor-pointer  transition-all ease-in-out duration-500">
                    <h1>Login/SignUp</h1>
                </div>

                {/* mobile nav menu  */}
                <div className="md:hidden flex flex-col align-middle justify-center gap-1" onClick={() => {
                    setMenuOpen(!menuOpen)
                }}>
                    <div className={menuOpen ? "w-6 h-0.5 absolute rotate-[-40deg] rounded-full bg-white transition-all duration-200 ease":"w-6 h-0.5 rounded-full bg-white transition-all duration-200 ease"}></div>
                    <div className={menuOpen ? "w-6 h-0.5 rounded-full bg-white transition-all duration-200 ease opacity-0":"w-6 h-0.5 rounded-full bg-white transition-all duration-200 ease"}></div>
                    <div className={menuOpen ? "w-6 h-0.5 absolute rotate-[40deg] rounded-full bg-white transition-all duration-200 ease":"w-6 h-0.5 rounded-full bg-white transition-all duration-200 ease"}></div>
                </div>

            </div>

            {/* mobile complte nav menu  */}
            <div className={menuOpen ? "left-[0] translate-all ease-in-out duration-500 backdrop-blur-lg md:hidden font-sans p-10 text-[1.4rem] h-[100vh] w-full absolute z-10" : "left-[-100%] translate-all ease-in-out duration-500 backdrop-blur-lg md:hidden font-sans p-10 text-[1.4rem] h-[100vh] w-full absolute z-10"}>
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
        </>
    )
}