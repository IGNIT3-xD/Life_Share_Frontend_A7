import type { RequesterProp } from "@/components/RequesterCard";
import { apiClient, type PageMeta, type ApiEnvelope } from "./client";

export type BloodRequesterList = {
    requester: RequesterProp[];
    meta: PageMeta;
}

export async function fetchBloodRequesters(page = 1, limit = 3): Promise<BloodRequesterList> {
    const res = await apiClient<ApiEnvelope<BloodRequesterList>>('/api/v1/user/requester', {
        query: { page, limit },
    });
    return res.data;
}