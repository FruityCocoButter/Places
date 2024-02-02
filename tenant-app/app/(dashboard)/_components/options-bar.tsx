import {Signika } from "next/font/google";

const signika = Signika({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-signika',
    weight: "400"
  });


export default function OptionsBar(){
    return(
        <div className={signika.className}>
            <div>
                <div className="w-[48rem] flex flex-row text-xl m-4">
                    <div className="w-1/2 flex items-center justify-center">Posts</div>
                    <div className="w-1/2 flex items-center justify-center">Comments</div>
                </div>
                <hr/>
            </div>
        </div>
            
    )
}