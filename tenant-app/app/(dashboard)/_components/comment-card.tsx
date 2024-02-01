"use client";

import { Card } from "flowbite-react";
import Image from "next/image"
import { Signika_Negative, Rubik } from "next/font/google";
import { ThumbsUp, MessageSquare } from "lucide-react";

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

export default function CommentCard(){
    return(
        <div className="h-auto w-[60rem] bg-white border shadow-lg rounded-xl border-blue-300 flex flex-col items-start m-3">
            <div className="m-5 flex gap-x-3 text-xl">
                <Image width={50} height={50} src="/cape-town.jpg" alt="image 1"/>
                <span className={signikaNegative.className}>Cape Town</span>
            </div>
            <div className="mx-6 mb-4 flex flex-col gap-y-2">
                <div className={rubikLight.className}>
                    <span>
                        <span>Replying to </span>
                        <span className={rubikDark.className}>amyrobson </span>
                        <span>in </span>
                        <span className={rubikDark.className}><span className="text-sky-700">Loadshedding again...</span></span>
                    </span><br/>
                    <span className="text-sm">1 month ago</span><br/>
                    <span>Impressive! Though it seems the drag feature could be improved. 
                        But overall it looks incredible. 
                        You’ve nailed the design and the responsiveness at 
                        various breakpoints works really well.</span>
                </div>
            </div>
            <div className="flex flex-row mx-6 mb-4 gap-x-2 text-sm font-bold items-center">
                <ThumbsUp size={16}/>
                <span>
                    5
                </span>
                <MessageSquare size={16}/>
                <span>
                    6
                </span>
            </div>
        </div>
          
    );
}