"use client"
import OptionsBar from "@/app/(dashboard)/_components/options-bar-routes";
import SearchNav from "../../../../_components/SearchNav";
import { Sidebar } from "./../../../_components/sidebar";
import { usePathname } from "next/navigation";

function getUsername(){
    const pathname = usePathname();
    const usernameEnd = pathname.indexOf("/", 1);
    
    const username = pathname.substring(1, usernameEnd)
    return username;
}

const SideTabPageLayout = ({children}: {children:React.ReactNode}) => {
    return(
        <div className="flex">
            <div className="h-full z-50">
                <SearchNav/>
            </div>
            <div className="h-full flex flex-col">
                {/* Sidebar - shown on medium devices and larger */}
                <div className="hidden md:flex h-full w-96 fixed inset-y-0 z-30">
                    <Sidebar />
                </div>
                <div>
                    <div className="fixed inset-x-1/4 inset-y-20">
                        <OptionsBar username={getUsername()}/>
                    </div>

                    {/* Main Content */}
                    <div>
                        {children}
                    </div>
                </div>
                    
            </div>
        </div>
    );
}

export default SideTabPageLayout;