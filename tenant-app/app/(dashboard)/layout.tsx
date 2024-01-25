import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }:
    { children: React.ReactNode }) => {
    return (
        <div className="flex">
            {/* Sidebar - shown on medium devices and larger */}
            <div className="h-screen sticky top-0">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div>
                {children}
            </div>
        </div>


    );
}

export default DashboardLayout;