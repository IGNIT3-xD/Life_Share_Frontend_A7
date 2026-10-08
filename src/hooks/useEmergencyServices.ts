import { useQuery } from "@tanstack/react-query";
import { fetchEmergencyServices } from "@/api/emergencyServices";

export function useEmergencyServices(rawPage = 1, rawLimit = 3) {
  return useQuery({
    queryKey: ["emergency-services", rawPage, rawLimit],
    queryFn: () => fetchEmergencyServices(rawPage, rawLimit),
  });
}
