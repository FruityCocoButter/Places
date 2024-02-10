import Image from "next/image";
import Link from 'next/link';
import { Signika_Negative} from "next/font/google";

const signikaNegative = Signika_Negative({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-signika-negative',
    weight: "600"
  });

interface LocationTagProps{
    locationName: string
}


export default function LocationTag({locationName}: LocationTagProps){
    return(
        <Link href={"/"+locationName.toLowerCase().replaceAll(" ", "-")}>
            <div className="flex gap-x-3 text-lg mb-2">
                <Image width={40} height={40} src="/cape-town.jpg" alt="image 1"/>
                <span className={signikaNegative.className}>{locationName}</span>
            </div>
        </Link>
    );
}