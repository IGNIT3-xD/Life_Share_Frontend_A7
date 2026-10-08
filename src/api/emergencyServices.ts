import type { EmergencyServiceProp } from "@/components/EmergencyServiceCard";
import { apiClient, type ApiEnvelope, type PageMeta } from "@/api/client";

export type EmergencyServiceList = {
  services: EmergencyServiceProp[];
  meta: PageMeta;
};

export async function fetchEmergencyServices(
  page = 1,
  limit = 3,
): Promise<EmergencyServiceList> {
  const res = await apiClient<ApiEnvelope<EmergencyServiceList>>(
    "/api/v1/emergency-service",
    { query: { page, limit } },
  );
  return res.data;
}
