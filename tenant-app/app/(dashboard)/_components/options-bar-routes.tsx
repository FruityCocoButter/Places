import OptionsBarItem from "./options-bar-items";
import {Signika } from "next/font/google";

const signika = Signika({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-signika',
    weight: "400"
  });

const routes = [
    {
        label: "Posts",
        href: "/"
    }
];

interface OptionsBarRouteProps{
    username: string
}

export default function OptionsBarRoutes({username}: OptionsBarRouteProps){
    const routes = [
        {
            label: "Posts",
            href: "/"+username+"/posts"
        },
        {
            label: "Comments",
            href: "/"+username+"/comments"
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