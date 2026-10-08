import { fetchBloodRequesters } from "@/api/requester";
import { useQuery } from "@tanstack/react-query";

export function useBloodRequester(rawPage = 1, rawLimit = 3) {
    return useQuery({
        queryKey: ["blood_requester", rawPage, rawLimit],
        queryFn: () => fetchBloodRequesters(rawPage, rawLimit)
    })
}