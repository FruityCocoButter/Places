"use client";
import { usePathname } from 'next/navigation';
 
const Person = () => {
    const pathname = usePathname();
    const username = pathname.substring(1);

    return(
        <div className="fixed inset-x-96 inset-y-32">
            {username}
        </div>
    )
}

export default Person;