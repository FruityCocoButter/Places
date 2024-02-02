"use client";
import { usePathname } from 'next/navigation';
 
const PersonPosts = () => {
    const pathname = usePathname();
    const username = pathname.substring(1);

    return(
        <div className="fixed inset-x-96 inset-y-36 m-4">
            
            <span>{username}</span>
        </div>
    )
}

export default PersonPosts;