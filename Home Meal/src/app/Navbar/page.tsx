import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
     <div className="parent flex mt-5 font-sans text-lg">
        <div className="logo mx-3">
            <h1>HOME <span className='text-yellow-400'>MEALS</span></h1>
        </div>
        <div className="buttons mx-[24rem] flex gap-4">
            <a href="#" className='hover:text-yellow-500 translate-all ease-in-out duration-500'>Home</a>
            <a href="#" className='hover:text-yellow-500 translate-all ease-in-out duration-500'>Menu</a>
            <a href="#" className='hover:text-yellow-500 translate-all ease-in-out duration-500'>Categories</a>
            <a href="#" className='hover:text-yellow-500 translate-all ease-in-out duration-500'>About</a>
        </div>

        <div className="form mb-4 hover:bg-orange-400 hover:text-black font-bold text-orange-300 border border-orange-300 px-4 py-1 rounded-full cursor-pointer  transition-all ease-in-out duration-500">
            <h1>Login/SignUp</h1>
        </div>
     </div>
)
}