
import Link from 'next/link';
import { Avatar } from 'flowbite-react';
import { Signika_Negative} from "next/font/google";

const signikaNegative = Signika_Negative({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-signika-negative',
    weight: "600"
  });

interface PersonTagProps{
    personName: string,
}


export default function PersonTag({personName}: PersonTagProps){
    const formattedName = personName.toLowerCase().replaceAll(" ", "-");

    return(
        <Link href={"/people/"+ formattedName+"/posts"}>
            <div className="flex gap-x-3 text-sm mb-2 items-start">
                <Avatar img={"/"+formattedName+".png"} alt="Person" size="xs" rounded />
                <span className={signikaNegative.className}>{personName.toLowerCase()}</span>
            </div>
        </Link>
    );
}