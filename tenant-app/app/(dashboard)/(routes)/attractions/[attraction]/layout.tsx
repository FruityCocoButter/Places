"use client"
import OptionsBar from "@/app/(dashboard)/_components/options-bar-routes";
import SearchNav from "../../../../_components/SearchNav";
import { Sidebar } from "./../../../_components/sidebar";
import { usePathname } from "next/navigation";
import AttractionBanner from "@/app/(dashboard)/_components/attraction-banner";

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
                        <AttractionBanner 
                            imageSrc="/obs cafe 1.png" 
                            attractionName="Obs Cafe" 
                            rating={4.5} 
                            attractionDesc="Italian Restaurant
                            Welcome to Obz Cafe, where the flavors meet the vibrant pulse of Cape Town! 
                            Our restaurant is situated on the bustling Lower Main Road of Observatory"
                        />
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