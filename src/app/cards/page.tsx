import React from "react";
import Image from "next/image";
import Link from "next/link";


interface CardsProps {
    cardImageSrc: string;
    cardTitle: string;
    cardDis: string;
}

const Cards: React.FC<CardsProps> = ({ cardImageSrc, cardTitle, cardDis }) => {
    return (
        <>
            <Link href="#" className="group relative block bg-black max-w-[300px] h-[400px] rounded-sm">
                <Image
                    src={cardImageSrc}
                    alt=""
                    width={250}
                    height={250}
                    className="absolute rounded-sm inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-[1rem] font-semibold uppercase tracking-widest text-yellow-500">{cardTitle}</p>
                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-[-100%] group-hover:opacity-100">
                            <p className="text-sm text-white">{cardDis}</p>
                        </div>
                    </div>
                </div>

            </Link>
        </>
    );
};

export default Cards;