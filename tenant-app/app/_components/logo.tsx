import Image from "next/image";
import Link from "next/link"; 

export const Logo = () => {
    return(
        <div className="flex">
            <Link aria-current="page" className="flex items-center" href="/">
                    <Image className="h-7 w-auto" src="/logo.svg" alt="" width={30} height={30} />
                    <p className="sr-only">Website Title</p>
            </Link>
            <h2 className=' text-xl font-bold leading-7 text-gray-900 sm:block'>TENANT</h2>
        </div> 
    )
}