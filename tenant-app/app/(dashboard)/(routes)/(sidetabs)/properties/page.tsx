import { Alert } from "flowbite-react";
import PropertyCard from "../../../_components/property-card";

const PropertiesPage = () => {
    return(
        <div className="fixed inset-x-96 inset-y-56 h-screen w-1/2">
            <PropertyCard images={["/mansion4.png", "/mansion5.png", "/mansion6.png"]}/>
        </div>
    );
}

export default PropertiesPage;