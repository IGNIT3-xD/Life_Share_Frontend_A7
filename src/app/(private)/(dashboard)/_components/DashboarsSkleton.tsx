export function DashboardSkeleton() {
    return (
        <div className="flex min-h-screen bg-[#F8F9FA] font-graphik">
            <div className="fixed left-4 top-4 bottom-4 w-16 bg-white rounded-[2rem] border border-slate-100 animate-pulse" />
            <div className="flex-1 ml-24 p-6 md:p-8">
                <div className="h-8 w-64 bg-slate-200 rounded-md mb-8 animate-pulse" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4 h-96 bg-slate-200 rounded-[2rem] animate-pulse" />
                    <div className="lg:col-span-8 h-96 bg-slate-200 rounded-[2rem] animate-pulse" />
                </div>
            </div>
        </div>
    )
}