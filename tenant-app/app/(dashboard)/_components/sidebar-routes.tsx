"use client";
import { Home, CalendarCheck2, Building, Sparkles } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
    {
        icon: Home,
        label: "Home",
        href: "/home"
    },
    {
        icon: CalendarCheck2,
        label: "Attractions",
        href: "/attractions"
    },
    {
        icon: Building,
        label: "Properties",
        href: "/properties"
    },
    {
        icon: Sparkles,
        label: "Events",
        href: "/events"
    }
]

export const SidebarRoutes = () => {
    const routes = guestRoutes;

    return(
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <div key={route.href} className="pl-14"> {/* Add the key here */}
                    <SidebarItem
                        icon={route.icon}
                        label={route.label}
                        href={route.href}
                    />
                </div>
            ))}
        </div>
    )
}