import { Alert } from "flowbite-react";
import PropertyCard from "../../../_components/property-card";

const PropertiesPage = () => {
    return(
        <div className="fixed inset-x-[30rem] inset-y-56 h-screen w-1/2">
            <div className="flex flex-row">
                <PropertyCard images={["/mansion4.png", "/mansion5.png", "/mansion6.png"]}/>
                <PropertyCard images={["/mansion5.png", "/mansion6.png", "/mansion4.png"]}/>
            </div>
            <div className="flex flex-row">
                <PropertyCard images={["/mansion6.png", "/mansion4.png", "/mansion5.png"]}/>
                <PropertyCard images={["/mansion4.png","/mansion5.png", "/mansion6.png"]}/>
            </div>
                
        </div>
    );
}

export default PropertiesPage;