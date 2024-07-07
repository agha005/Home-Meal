"use client";
import Image from "next/image";
import Cards from "./cards/page";
import { Bgimage } from "../../public/assets/images/image";
import cardData from "./cardData";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Image Container */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/bg-image.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex bg-black bg-opacity-70">
          <div className=" text-white mb-[5rem] mt-[7rem] mx-10 md:mx-20">
            <h1 className="font-serif font-bold lg:text-5xl text-4xl">
              Best <span className="text-yellow-400">Food</span> When{" "}
              <span className="text-yellow-400">Hungry!</span> <br />
              At Door Steps
            </h1>
            <p className="max-w-sm pt-10 mt-[1rem] text-xl font-semibold">Get all the Variety of FOOD eat and feel it like HOME MEAL.</p>
            <p className="text-white pt-2 md:text-lg font-sans max-w-xl opacity-60">Open 24/7 Mon-Sun</p>
            <div className="mt-[4rem]">
              <a href="#" className="bg-yellow-400 font-extrabold text-xl p-4 px-8 rounded-3xl text-black hover:border transition duration-500 hover:text-yellow-300 hover:border-yellow-400 hover:bg-transparent">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-24 sm:py-24 w-[100%]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl lg:mx-0 mb-[70px]">
            <h2 className="text-3xl font-bold tracking-tight text-yellow-400 sm:text-4xl">What we Offer</h2>
            <p className="mt-2 text-lg leading-8 text-white">Learn how to grow your business with our expert advice.</p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-4">
            {cardData.map((val, index) => (
              <Cards
                key={index}
                cardImageSrc={val.cardImageSrc}
                cardTitle={val.title1}
                cardDis={val.cardDis}
              />
            ))}

          </div>

        </div>
      </div>
    </>
  );
}
