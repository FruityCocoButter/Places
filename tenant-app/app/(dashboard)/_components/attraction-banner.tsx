
import { Avatar } from 'flowbite-react';
import { Star } from 'lucide-react';
import { Signika_Negative} from "next/font/google";

const signikaNegative = Signika_Negative({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-signika-negative',
    weight: "600"
  });

interface AttractionBannerProps{
    imageSrc: string,
    attractionName: string,
    rating: number,
    attractionDesc: string
}

export default function AttractionBanner({imageSrc, attractionName, rating, attractionDesc}: AttractionBannerProps){
    return(
        <div className="bg-white shadow-md rounded-lg p-4 grid grid-cols-3 items-center gap-4 h-auto">
            <div className="col-span-1">
                <Avatar img={imageSrc} alt="Location" size="xl" rounded />
            </div>
            <div className="col-span-2 flex flex-col gap-y-2">
                <span className={signikaNegative.className}>
                    <h1 className="text-2xl font-bold">{attractionName}</h1>
                </span>
                <p className="text-sm flex flex-row gap-x-1 text-sky-700 font-bold">
                    {rating} <Star size={16} strokeWidth={2.5}/>
                </p>
                <p className="text-sm">{attractionDesc}</p>
            </div>
        </div>
    );
}