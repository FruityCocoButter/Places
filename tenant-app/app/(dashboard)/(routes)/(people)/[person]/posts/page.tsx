"use client";
import { usePathname, useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
 
const PersonPosts = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = pathname === "/fruitycocobutter/posts";


    const username = pathname.substring(1);

    return(
        <div className="fixed inset-x-96 inset-y-36 m-4">
            
            <span>{username}</span>
        </div>
    )
}

export default PersonPosts;