"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type SearchInputProps = {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    debounceMs?: number;
    className?: string;
};

export function SearchInput({
    value: externalValue = "",
    onChange,
    placeholder = "Search...",
    debounceMs = 400,
    className,
}: SearchInputProps) {
    const [localValue, setLocalValue] = useState(externalValue);

    // Sync when external value is reset (e.g., clear all filters)
    useEffect(() => {
        setLocalValue(externalValue);
    }, [externalValue]);

    // Debounce the onChange callback
    useEffect(() => {
        const handler = setTimeout(() => {
            if (localValue !== externalValue) {
                onChange(localValue);
            }
        }, debounceMs);

        return () => clearTimeout(handler);
    }, [localValue, debounceMs, onChange, externalValue]);

    return (
        <div className={cn("relative w-full font-graphik", className)}>
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
                type="text"
                value={localValue}
                onChange={(e) => setLocalValue(e.target.value)}
                placeholder={placeholder}
                className="w-full h-12 rounded-full border border-gray-200 bg-white pl-11 pr-11 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/40 transition-all"
            />
            {localValue && (
                <button
                    type="button"
                    onClick={() => setLocalValue("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                    aria-label="Clear search"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}