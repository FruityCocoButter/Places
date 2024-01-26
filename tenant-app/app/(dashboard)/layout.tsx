import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }:
    { children: React.ReactNode }) => {
    return (
        <div className="h-full flex flex-col"">
            {/* Sidebar - shown on medium devices and larger */}
            <div className="hidden md:flex h-full w-96 fixed inset-y-0 z-50"">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div>
                {children}
            </div>
        </div>


    );
};

export default DashboardLayout;