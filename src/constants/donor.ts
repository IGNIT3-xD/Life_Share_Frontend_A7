export const BLOOD_GROUPS = [
    { value: "A_POS", label: "A+" },
    { value: "A_NEG", label: "A-" },
    { value: "B_POS", label: "B+" },
    { value: "B_NEG", label: "B-" },
    { value: "AB_POS", label: "AB+" },
    { value: "AB_NEG", label: "AB-" },
    { value: "O_POS", label: "O+" },
    { value: "O_NEG", label: "O-" },
] as const;

export const AVAILABILITY_OPTIONS = [
    { value: "AVAILABLE", label: "Available" },
    { value: "ON_HOLD", label: "On Hold" },
    { value: "UNAVAILABLE", label: "Unavailable" },
] as const;

export const SORT_OPTIONS = [
    { value: "desc", label: "Newest First" },
    { value: "asc", label: "Oldest First" },
] as const;