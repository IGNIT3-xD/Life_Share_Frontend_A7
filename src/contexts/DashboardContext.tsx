"use client";

import { createContext, useContext } from "react";
import type { MeUser } from "@/api/auth";

type DashboardContextType = {
    user: MeUser;
    role: string;
};

const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardProvider({ user, children }: {
    user: MeUser;
    children: React.ReactNode;
}) {
    return (
        <DashboardContext.Provider value={{ user, role: user.role }}>
            {children}
        </DashboardContext.Provider>
    );
}

/**
 * Hook to access the currently logged-in dashboard user.
 * Must be used inside <DashboardProvider>.
 */
export function useDashboard() {
    const context = useContext(DashboardContext);
    if (!context) {
        throw new Error("useDashboard must be used inside <DashboardProvider>");
    }
    return context;
}