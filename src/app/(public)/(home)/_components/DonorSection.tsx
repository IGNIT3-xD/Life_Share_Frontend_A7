"use client";

import { DonorCard } from "@/components/DonorCard";
import { Button } from "@/components/ui/button";
import { useDonors } from "@/hooks/useDonors";
import { UserGroup } from "lucide-react";
import Link from "next/link";

// const LIMIT = 3;

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

export function DonorSection() {
  const { data, isPending, error, refetch } = useDonors(1, 3);

  return (
    <div className="container-main my-10 lg:my-16">
      <h2 className="mb-6 text-center text-primary">
        Our Feature <span className="text-[#B15A36]">Donors</span>.
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
            Could not load donors. Please try again.
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

      {data && data.donors.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          No donors found yet.
        </p>
      )}

      {data && data.donors.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.donors.map((donor) => (
            <DonorCard key={donor.id} data={donor} />
          ))}
        </div>
      )}

      <div className="my-6 flex items-center justify-center">
        <Button asChild className="btn-main bg-[#B15A36]">
          <Link href={"/donors"}>
            All Donors <UserGroup />
          </Link>
        </Button>
      </div>
    </div>
  );
}
