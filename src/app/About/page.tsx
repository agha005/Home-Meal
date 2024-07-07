import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <div className="border w-full min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center mx-10">
                {/* <div className="w-[500px] h-[600px] border"> */}
                    <Image
                        src="https://images.unsplash.com/photo-1612630741022-b29ec17d013d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Image..."
                        width={200}
                        height={250}
                        quality={100}
                        className="w-[500px] h-[600px] rounded-sm"
                    />
                {/* </div> */}

                <div>
                    <p>Welcome to Home Meal Delivery, where we bring the warmth and comfort of homemade meals directly to your doorstep. Born out of a passion for delicious, home-cooked food, we are dedicated to providing you with a variety of meals that not only tantalize your taste buds but also nourish your soul.</p>
                </div>
            </div>
        </div>
    );
}