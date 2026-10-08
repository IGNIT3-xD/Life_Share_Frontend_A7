"use client"

import { RequesterCard } from "@/components/RequesterCard";
import { Button } from "@/components/ui/button";
import { useBloodRequester } from "@/hooks/useRequester";
import { UserPlus } from "lucide-react";
import Link from "next/link";

function CardSkeleton() {
    return (
        <div className="mx-auto w-full max-w-sm animate-pulse rounded-3xl border border-gray-200 bg-white p-6">
            <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gray-200" />
                    <div className="flex flex-col gap-2">
                        <div className="h-5 w-32 rounded bg-gray-200" />
                        <div className="h-4 w-20 rounded bg-gray-100" />
                    </div>
                </div>
                <div className="h-14 w-16 rounded-2xl bg-gray-100" />
            </div>
            <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="h-16 rounded-2xl bg-gray-100" />
                <div className="h-16 rounded-2xl bg-gray-100" />
            </div>
            <div className="h-14 rounded-t border-t border-gray-100 bg-gray-50" />
        </div>
    );
}

const RequesterSection = () => {
    // Pass the LIMIT constant to your hook
    const { data, isPending, error, refetch } = useBloodRequester(1, 3);

    return (
        <div className="container-main my-10 lg:my-16">
            <h2 className="mb-6 text-center text-primary">
                Request For The <span className="text-[#B15A36]">Blood</span>.
            </h2>

            {isPending && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </div>
            )}

            {error && (
                <div className="flex flex-col items-center gap-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        Could not load requesters. Please try again.
                    </p>
                    <button
                        type="button"
                        onClick={() => refetch()}
                        className="btn-main rounded-lg px-4 py-2 text-sm text-white"
                    >
                        Retry
                    </button>
                </div>
            )}

            {data && data.requester.length === 0 && (
                <p className="text-center text-sm text-muted-foreground">
                    No blood requester found yet.
                </p>
            )}

            {data && data.requester.length > 0 && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {/* FIX: Slice the array to enforce the limit on the frontend */}
                    {data.requester.map((requester) => (
                        <RequesterCard key={requester.id} data={requester} />
                    ))}
                </div>
            )}

            <div className="my-6 flex items-center justify-center">
                <Button asChild className="btn-main bg-[#B15A36]">
                    <Link href={'/all-requesters'}>All Requesters <UserPlus /></Link>
                </Button>
            </div>
        </div>
    );
};

export default RequesterSection;