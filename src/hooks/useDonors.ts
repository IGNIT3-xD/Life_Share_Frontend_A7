import { useQuery } from "@tanstack/react-query";
import { fetchDonors } from "@/api/donors";

export function useDonors(page = 1, limit = 3) {
  return useQuery({
    queryKey: ["donors", page, limit],
    queryFn: () => fetchDonors(page, limit),
  });
}
