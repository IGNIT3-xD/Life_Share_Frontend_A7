import { useQuery } from "@tanstack/react-query";
import { type DonorFilters, fetchAllDOnors, fetchDonors } from "@/api/donors";

export function useDonors(rawPage = 1, rawLimit = 3) {
  return useQuery({
    queryKey: ["donors", rawPage, rawLimit],
    queryFn: () => fetchDonors(rawPage, rawLimit),
  });
}

export const useAllDonors = (filters: DonorFilters = {}) => {
  return useQuery({
    queryKey: ["all_donors", JSON.stringify(filters)],
    queryFn: () => fetchAllDOnors(filters),
    placeholderData: (prev) => prev,
  })
}