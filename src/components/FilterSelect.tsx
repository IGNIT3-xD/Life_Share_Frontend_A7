"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export type FilterOption = {
    value: string;
    label: string;
};

type FilterSelectProps = {
    value: string;
    onChange: (value: string) => void;
    options: readonly FilterOption[];
    placeholder?: string;
    icon?: React.ReactNode;
    className?: string;
};

export function FilterSelect({
    value,
    onChange,
    options,
    placeholder = "Select",
    icon,
    className,
}: FilterSelectProps) {
    return (
        <div className={cn("relative font-graphik", className)}>
            {icon && (
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    {icon}
                </div>
            )}
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={cn(
                    "w-full h-12 appearance-none rounded-full border border-gray-200 bg-white pr-10 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/40 transition-all cursor-pointer hover:border-gray-300",
                    icon ? "pl-11" : "pl-5"
                )}
            >
                <option value="">{placeholder}</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
    );
}