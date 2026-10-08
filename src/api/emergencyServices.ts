import type { EmergencyServiceProp } from "@/components/EmergencyServiceCard";
import { apiClient, type ApiEnvelope, type PageMeta } from "@/api/client";

export type EmergencyServiceList = {
  services: EmergencyServiceProp[];
  meta: PageMeta;
};

export async function fetchEmergencyServices(
  rawPage = 1,
  rawLimit = 3,
): Promise<EmergencyServiceList> {
  const res = await apiClient<ApiEnvelope<EmergencyServiceList>>(
    "/api/v1/emergency-service",
    { query: { rawPage, rawLimit } },
  );
  return res.data;
}
