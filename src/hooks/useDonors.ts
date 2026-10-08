import { useQuery } from "@tanstack/react-query";
import { fetchDonors } from "@/api/donors";

export function useDonors(rawPage = 1, rawLimit = 3) {
  return useQuery({
    queryKey: ["donors", rawPage, rawLimit],
    queryFn: () => fetchDonors(rawPage, rawLimit),
  });
}
