import { Alert } from "flowbite-react";
import PropertyCard from "../../_components/property-card";

const PropertiesPage = () => {
    return(
        <div className="fixed inset-x-96 inset-y-16 h-screen w-1/2">
            <PropertyCard images={["/armchair theatre 1.png", "/city rock 1.png", "/obs cafe 1.png"]}/>
        </div>
    );
}

export default PropertiesPage;