import type { DonorProps } from "@/components/DonorCard";
import { apiClient, type ApiEnvelope, type PageMeta } from "@/api/client";

export type DonorList = {
  donors: DonorProps[];
  meta: PageMeta;
};

const prefix = '/api/v1'

export async function fetchDonors(rawPage = 1, rawLimit = 3): Promise<DonorList> {
  const res = await apiClient<ApiEnvelope<DonorList>>(`${prefix}/donor`, {
    query: { rawPage, rawLimit },
  });
  return res.data;
}
