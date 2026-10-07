"use client";

import Image from "next/image";
import {
    Clock,
    ChevronRight,
    Ambulance
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

export type EmergencyServiceProp = {
    id: string;
    service_name: string;
    service_category: string;
    service_status: string;
    description: string;
    price: string;
    service_image: string;
    service_image_public_id: string;
    availability: string;
    hospital_id: string;
    created_at: string;
    updated_at: string;
};

// Utility to format category (e.g., EMERGENCY_AMBULANCE -> Emergency Ambulance)
const formatCategory = (cat: string) => {
    if (!cat) return "General";
    return cat
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
};

// Utility to format price (e.g., 3000 -> ৳3,000)
const formatPrice = (price: string) => {
    if (!price) return "N/A";
    return `৳${Number(price).toLocaleString()}`;
};

export function EmergencyServiceCard({ data }: { data: EmergencyServiceProp }) {
    const isActive = data.service_status === "ACTIVE";

    return (
        <div className="relative w-full max-w-sm mx-auto font-graphik transition-all duration-300">
            {/* Main Card Container */}
            <div className="group relative flex flex-col bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border hover:border-[#b15b3672]">

                {/* Image Section with Next.js Optimization */}
                <div className="relative w-full aspect-16/10 bg-gray-100 overflow-hidden">
                    <Image
                        src={data.service_image}
                        alt={data.service_name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={false}
                    />

                    {/* Subtle Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-80" />

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-gray-800 shadow-sm border border-white/20">
                        <span className={cn(
                            "w-2 h-2 rounded-full",
                            isActive ? "bg-emerald-500 animate-pulse" : "bg-red-500"
                        )} />
                        {data.service_status}
                    </div>

                    {/* Availability Badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white border border-white/10">
                        <Clock className="w-3.5 h-3.5" />
                        {data.availability}
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-5">

                    {/* Category Tag */}
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-50 px-2.5 py-1 rounded-full flex items-center gap-1 border border-red-100">
                            <Ambulance className="w-3 h-3" />
                            {formatCategory(data.service_category)}
                        </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {data.service_name}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed truncate line-clamp-3 mb-4">
                        {data.description}
                    </p>

                    {/* Footer: Price & Details Button */}
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Price</span>
                            <span className="text-lg font-extrabold text-gray-900 tracking-tight">
                                {formatPrice(data.price)}
                            </span>
                        </div>

                        <Button asChild className="btn-main bg-[#B15A36]">
                            <Link href={`/emergency-service/${data.id}`}>
                                Details
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}