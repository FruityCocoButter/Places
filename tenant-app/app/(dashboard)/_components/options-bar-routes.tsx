import OptionsBarItem from "./options-bar-items";
import {Signika } from "next/font/google";

const signika = Signika({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-signika',
    weight: "400"
  });


interface OptionsBarRouteProps{
    username: string,
    label1: string,
    href1: string,
    label2: string,
    href2: string
}

export default function OptionsBarRoutes({username, label1, href1, label2, href2}: OptionsBarRouteProps){
    const routes = [
        {
            label: label1,
            href: href1
        },
        {
            label: label2,
            href: href2
        }
    ];

    return(
        <div className={signika.className}>
            <div>
                <div className="w-[48rem] flex flex-row text-xl m-4">
                    {routes.map((routes) => (<OptionsBarItem label={routes.label} href={routes.href}/>))}
                </div>
                <hr/>
            </div>
        </div>
    )
}