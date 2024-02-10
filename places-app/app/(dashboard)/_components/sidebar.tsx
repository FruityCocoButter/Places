import { Logo } from "@/app/_components/logo";
import { SidebarRoutes } from "./sidebar-routes";
import { Inter, Poppins, Open_Sans, Roboto_Mono } from "next/font/google";
import { UserButton } from "@clerk/nextjs";

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
  })

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const Sidebar = () => {
    return(
        <div className="h-full w-full border-r flex flex-col overflow-y-auto bg-white shadow-sm items-center">
            <div className="p-6">
                <Logo/>
            </div>
            <div className="flex flex-col w-full h-full">
                <SidebarRoutes/>
            </div>
            <div className={inter.className}>
                <div className="flex items-center justify-center gap-x-5 p-6">
                    <UserButton/>
                    <div>
                        <div className="font-normal">
                            FruityCocoButter
                        </div>
                        <div className="font-light text-sm">
                            fruitycocobutter@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}