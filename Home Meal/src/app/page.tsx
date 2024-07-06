"use client";
import Image from "next/image";
import { Bgimage } from "@/assets/images/image";
import Categories from "./Categories/page";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Container */}
      <div className="absolute inset-0">
        <Image
          src={Bgimage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100} // Optional: Adjust image quality
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex bg-black bg-opacity-70">
        <div className=" text-white mb-[5rem] mt-[7rem] mx-20">
          <h1 className="font-serif font-bold lg:text-5xl text-4xl">
            Best <span className="text-yellow-400">Food</span> When{" "}
            <span className="text-yellow-400">Hungry!</span> <br />
            At Door Steps
          </h1>
          <p className="text-white pt-10 text-2xl font-sans max-w-xl font-bold">
            Open 24/7 Mon-Sun
          </p>
          <p className="max-w-sm mt-[2rem] text-xl font-semibold">
            Get all the Variety of FOOD eat and feel it like HOME MEAL.
          </p>
          <div className="mt-[4rem]">
            <a
              href="Categories"
              className="bg-orange-400 font-extrabold text-xl p-4 px-8 rounded-3xl text-black hover:border transition duration-500 hover:text-orange-300 hover:border-orange-300 hover:bg-transparent"
            >
             Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
