"use client"

import { Carousel, Button, Card } from "flowbite-react";
import { Roboto, Readex_Pro } from "next/font/google";
import { Star } from "lucide-react";

const robotoLight = Roboto({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
    weight: "300"
  });

const robotoBold = Roboto({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
    weight: "700"
});

const readex_pro = Readex_Pro(
    {
        subsets: ['latin'],
        display: 'swap',
        variable: '--font-readex-pro'
    }
)

interface CardProps{
    images: string[]
}

export default function AttractionCard({images}: CardProps){
    return(
        <div className="h-auto w-96 bg-white border shadow-lg rounded-xl border-blue-300 flex flex-col items-start m-3">
            <div className="h-56 w-80 mx-8 mt-4">
                <Carousel slide={false}>
                    {images.map((image) => (<img src={image} alt="..." />))}
                </Carousel>
            </div>
            <div className="w-80 mx-6 mt-4 text-xl font-bold text-cyan-700">
                <div className={robotoBold.className}>  
                    Obs Cafe
                </div>
            </div>
            <div className="w-80 mx-6 my-2 text-base font-light">
                <div className={robotoLight.className}>
                    Family friendly serving American style barbecue cuisine. Limited seating available, make your reservation now. 
                </div>
            </div>
            <div className="w-80 mx-6 mb-2 text-base font-light text-sky-900">
                <div className={readex_pro.className}>
                    123 Lollipop Lane
                </div>
            </div>
            <div className="flex flex-row mx-6 mb-4 gap-x-2 text-sm items-center">
                <span>
                    Open: 7am - 5pm
                </span>
                <div className="flex ml-36 text-base text-cyan-800 gap-x-2">
                    <span className={robotoBold.className}>  
                        4.5
                    </span>
                    <div className="mt-1">
                        <Star size={16} color="#155e75"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
        