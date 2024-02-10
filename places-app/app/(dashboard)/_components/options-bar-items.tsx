"use client";
import { usePathname, useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
import {Signika } from "next/font/google";

const signika = Signika({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-signika',
    weight: "400"
  });

interface OptionsBarItemProps{
    label: string,
    href: string
}




export default function OptionsBarItem({label, href}: OptionsBarItemProps){
    const pathname = usePathname();
    const router = useRouter();

    const isActive = pathname === href;

    const onClick = () => {
        router.push(href)
    }

    return(
        
        <button
            onClick={onClick}
            type="button"
            className="w-1/2 flex items-center justify-center"
            >
            <div className={cn("text-slate-400", isActive && "text-slate-900")}>
                {label}
            </div>
        </button>
            
    )
}