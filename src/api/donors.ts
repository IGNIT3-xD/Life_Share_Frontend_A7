import type { DonorProps } from "@/components/DonorCard";
import { apiClient, type ApiEnvelope, type PageMeta } from "@/api/client";

export type DonorList = {
  donors: DonorProps[];
  meta: PageMeta;
};

const prefix = '/api/v1'

export async function fetchDonors(page = 1, limit = 3): Promise<DonorList> {
  const res = await apiClient<ApiEnvelope<DonorList>>(`${prefix}/donor`, {
    query: { page, limit },
  });
  return res.data;
}
