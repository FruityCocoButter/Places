import SearchNav from "../_components/SearchNav";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }:
    { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <div className="h-full z-50">
                <SearchNav/>
            </div>
            <div className="h-full flex flex-col">
                {/* Sidebar - shown on medium devices and larger */}
                <div className="hidden md:flex h-full w-96 fixed inset-y-0 z-30">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div>
                    {children}
                </div>    
            </div>
        </div>
    );
};

export default DashboardLayout;