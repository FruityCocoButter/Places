"use client"

import { Carousel, Button, Card } from "flowbite-react";
import { Roboto } from "next/font/google";
import { Bath, Bed, Ruler } from "lucide-react";
import { useRouter} from "next/navigation";

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

interface CardProps{
    images: string[],
    href: string
}

export default function PropertyCard({images, href}: CardProps){
    const router = useRouter();
    const onClick = () => {
        router.push(href);
    }

    return(
        <div className="h-auto w-96 bg-white border shadow-lg rounded-xl border-blue-300 flex flex-col items-start m-3">
            <div className="h-56 w-80 mx-8 mt-4">
                <Carousel slide={false}>
                    {images.map((image) => (<img src={image} alt="..." />))}
                </Carousel>
            </div>
            <button onClick={onClick}>
                <div className="w-80 mx-6 mt-4 text-xl font-bold text-cyan-700">
                    <div className={robotoBold.className}>  
                        12 Candycane Blvd
                    </div>
                </div>
                <div className="w-80 mx-6 my-2 text-base font-light">
                    <div className={robotoLight.className}>
                    Magnificant ocean views overlooked by Purgatory Hill.
                    Offers home theatre seating 20 guests, indoor gym and a private massage studio.
                    Two industrial grade generators and 3 olympic sized swimming pools.
                    Secure garage with two parking bays available.
                    Highly sought after, get it now. 
                    </div>
                </div>
                <div className="flex flex-row mx-6 mb-4 gap-x-2 text-sm items-center">
                    <Bed size={16} />
                    <span>
                        5
                    </span>
                    <Bath size={16}/>
                    <span>
                        6
                    </span>
                    <Ruler size={16} />
                    <span className="w-auto">
                        2500 m<span className="text-[0.5rem] position: relative top-1 align-super">2</span>
                    </span>
                    <span className="flex ml-24 text-base text-cyan-800">
                        <span className={robotoBold.className}>  
                            6250
                        </span>
                        <span className="text-sm mt-1">
                            /pm
                        </span>
                    </span>
                    
                </div>
            </button>
        </div>
            
    )
}