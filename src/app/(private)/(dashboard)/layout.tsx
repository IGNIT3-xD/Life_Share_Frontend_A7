"use client"

import { useMe } from "@/hooks/useAuth";
import { DashboardSidebar } from "./_components/DashboardSidebar";
import { DashboardSkeleton } from "./_components/DashboarsSkleton";
import { DashboardProvider } from "@/contexts/DashboardContext";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data, isPending, error } = useMe()

    if (isPending) {
        return <DashboardSkeleton />
    }

    if (error || !data) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#F8F9FA] font-graphik">
                <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Access Denied</h2>
                    <p className="text-sm text-slate-500">Please log in to view your dashboard.</p>
                </div>
            </div>
        );
    }

    return (
        <DashboardProvider user={data}>
            <div className="flex min-h-screen bg-[#F8F9FA] font-graphik overflow-hidden">
                <DashboardSidebar role={data.role} />

                <div className="flex-1 ml-24 p-6 md:p-8 overflow-y-auto">
                    {children}
                </div>
            </div>
        </DashboardProvider>
    );
}