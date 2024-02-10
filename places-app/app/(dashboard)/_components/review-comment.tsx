import { Signika_Negative, Rubik } from "next/font/google";
import { Star } from "lucide-react";
import PersonTag from "./person-tag";

const signikaNegative = Signika_Negative({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-signika-negative',
    weight: "600"
  });

const rubikLight = Rubik({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-rubik',
    weight: "300"
});

const rubikDark = Rubik({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-rubik',
    weight: "400"
});

interface ReviewCommentProps{
    location?: string,
    rating?: number
}

export default function ReviewComment({location, rating} : ReviewCommentProps){
    return(
        <div className="h-auto w-[56rem] bg-white border shadow-lg rounded-xl border-blue-300 flex flex-col items-start m-3 p-6">
            <div className=" flex flex-col gap-y-3">
                <div className={rubikLight.className}>
                    <div className="flex items-start text-sm text-gray-500">
                        <PersonTag personName="FruityCocoButter"/>
                        <span className="mx-2">•</span>
                        {location ? <p>{location}</p>: <p className="flex flex-row gap-x-1 text-sky-700">{rating} <Star size={16} strokeWidth={1.5}/></p>}
                        {/**Location if its a landlord review, rating if property or attraction review */}
                    </div>
                    <span className="text-sm">1 month ago</span><br/>
                    <span>Impressive! Though it seems the drag feature could be improved. 
                        But overall it looks incredible. 
                        You’ve nailed the design and the responsiveness at 
                        various breakpoints works really well.</span>
                </div>
            </div>
        </div>
    )
}