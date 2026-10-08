import { fetchBloodRequesters } from "@/api/requester";
import { useQuery } from "@tanstack/react-query";

export function useBloodRequester(page = 1, limit = 3) {
    return useQuery({
        queryKey: ["blood_requester", page, limit],
        queryFn: () => fetchBloodRequesters(page, limit)
    })
}