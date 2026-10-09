import type { DonorProps } from "@/components/DonorCard";
import { apiClient, type ApiEnvelope, type PageMeta } from "@/api/client";

export type DonorList = {
  donors: DonorProps[];
  meta: PageMeta;
};

export type DonorFilters = {
  search?: string;
  blood_group?: string;
  availability?: string;
  location?: string;
  sortBy?: "asc" | "desc";
  rawPage?: number;
  rawLimit?: number;
};

const prefix = "/api/v1";

export async function fetchDonors(rawPage = 1, rawLimit = 3): Promise<DonorList> {
  const res = await apiClient<ApiEnvelope<DonorList>>(`${prefix}/donor`, {
    query: { rawPage, rawLimit },
  });
  return res.data;
}

export const fetchAllDOnors = async (filters: DonorFilters = {}) => {
  const { search, availability, blood_group, location, rawLimit = 9, rawPage = 1, sortBy = 'desc' } = filters

  const query: Record<string, string | number> = {
    rawPage, rawLimit, sortBy
  }

  if (search) query.search = search
  if (availability) query.availability = availability
  if (blood_group) query.blood_group = blood_group
  if (location) query.location = location

  const res = await apiClient<ApiEnvelope<DonorList>>(`${prefix}/donor`, { query });
  return res.data;
}