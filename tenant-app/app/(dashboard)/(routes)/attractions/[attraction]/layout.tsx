"use client"
import OptionsBar from "@/app/(dashboard)/_components/options-bar-routes";
import SearchNav from "../../../../_components/SearchNav";
import { Sidebar } from "./../../../_components/sidebar";
import { usePathname } from "next/navigation";

function getAttractionName(){
    const pathname = usePathname();
    const attractionNameEnd = pathname.indexOf("/", 13);
    
    const attractionName = pathname.substring(13, attractionNameEnd)
    return attractionName;
}

const PropertyPageLayout = ({children}: {children:React.ReactNode}) => {
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
                        <OptionsBar 
                            username={getAttractionName()}
                            label1="Notices"
                            href1={"/attractions/"+getAttractionName()+"/notices"}
                            label2="Reviews"
                            href2={"/attractions/"+getAttractionName()+"/reviews"}
                        />
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

export default PropertyPageLayout;