import { Avatar } from 'flowbite-react';
import { Star } from 'lucide-react';
import { Roboto } from "next/font/google";
import { Bath, Bed, Ruler } from "lucide-react";

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

interface PropertyBannerProps{
    imageSrc: string,
    propertyAddress: string,
    propertyDesc: string
}

export default function PropertyBanner({imageSrc, propertyAddress, propertyDesc}: PropertyBannerProps){
    return(
        <div className="bg-white shadow-md rounded-lg p-4 grid grid-cols-3 items-center gap-4 h-auto m-2">
            <div className="col-span-1">
                <Avatar img={imageSrc} alt="Location" size="xl" rounded />
            </div>
            <div className="col-span-2 flex flex-col gap-y-2">
                <div className="w-80 text-2xl font-bold text-cyan-700">
                    <div className={robotoBold.className}>  
                        {propertyAddress}
                    </div>
                </div>
                <div className="flex flex-row gap-x-2 text-sm items-center">
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
                
                <p className="text-sm w-[32rem]">{propertyDesc}</p>
            </div>
        </div>
    );
}