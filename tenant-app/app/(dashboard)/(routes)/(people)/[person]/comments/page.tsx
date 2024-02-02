"use client";
import { usePathname, useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
 
const PersonComments = () => {
    const pathname = usePathname();

    return(
        <div className="fixed inset-x-96 inset-y-36 m-4">
            
            <span>{pathname}</span>
        </div>
    )
}

export default PersonComments;