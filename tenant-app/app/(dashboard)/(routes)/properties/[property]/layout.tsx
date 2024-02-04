"use client"
import OptionsBar from "@/app/(dashboard)/_components/options-bar-routes";
import SearchNav from "../../../../_components/SearchNav";
import { Sidebar } from "./../../../_components/sidebar";
import { usePathname } from "next/navigation";

function getPropertyName(){
    const pathname = usePathname();
    const propertyNameEnd = pathname.indexOf("/", 12);
    
    const propertyName = pathname.substring(12, propertyNameEnd)
    return propertyName;
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
                            username={getPropertyName()}
                            label1="Amenities"
                            href1={"/properties/"+getPropertyName()+"/amenities"}
                            label2="Reviews"
                            href2={"/properties/"+getPropertyName()+"/reviews"}
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