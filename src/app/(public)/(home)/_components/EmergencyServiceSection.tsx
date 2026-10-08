"use client";

import { EmergencyServiceCard } from "@/components/EmergencyServiceCard";
import { Button } from "@/components/ui/button";
import { useEmergencyServices } from "@/hooks/useEmergencyServices";
import { Siren } from "lucide-react";
import Link from "next/link";

function ServiceSkeleton() {
  return (
    <div className="mx-auto w-full max-w-sm animate-pulse overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="aspect-16/10 bg-gray-200" />
      <div className="flex flex-col gap-3 p-5">
        <div className="h-4 w-28 rounded-full bg-red-100" />
        <div className="h-5 w-3/4 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-100" />
        <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="h-8 w-20 rounded bg-gray-100" />
          <div className="h-8 w-24 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function EmergencyServiceSection() {
  const { data, isPending, error, refetch } = useEmergencyServices(1, 3);

  return (
    <div className="container-main my-10 lg:my-16">
      <h2 className="mb-6 text-center text-primary">
        Emergency <span className="text-[#B15A36]">Services</span>.
      </h2>

      {isPending && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ServiceSkeleton />
          <ServiceSkeleton />
          <ServiceSkeleton />
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            Could not load emergency services. Please try again.
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

      {data && data.services.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          No emergency services found yet.
        </p>
      )}

      {data && data.services.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.services.map((service) => (
            <EmergencyServiceCard key={service.id} data={service} />
          ))}
        </div>
      )}

      <div className="my-6 flex items-center justify-center">
        <Button asChild className="btn-main bg-[#B15A36]">
          <Link href={'/emergency-service'}>All Services <Siren /></Link>
        </Button>
      </div>
    </div>
  );
}
