import SearchNav from "../../../_components/SearchNav";
import LocationBanner from "../../_components/LocationBanner";
import { Sidebar } from "./../../_components/sidebar";

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
                        <LocationBanner 
                        imageSrc="/next.svg"
                        locationName='Cape Town'
                        coordinates='33.9249° S, 18.4241° E'
                        population='4.004 million'
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

export default SideTabPageLayout;