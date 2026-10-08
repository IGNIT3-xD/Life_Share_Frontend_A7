import { useQuery } from "@tanstack/react-query";
import { fetchEmergencyServices } from "@/api/emergencyServices";

export function useEmergencyServices(page = 1, limit = 3) {
  return useQuery({
    queryKey: ["emergency-services", page, limit],
    queryFn: () => fetchEmergencyServices(page, limit),
  });
}
