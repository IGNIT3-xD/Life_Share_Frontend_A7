import { apiClient, type ApiEnvelope } from "./client"

export type AuthUser = {
    token: {
        accessToken: string;
        refresh: string;
    };
};

const prefix = '/api/v1/auth'

export const fetchLogin = async (credentials: { email: string, password: string }) => {
    const res = await apiClient<ApiEnvelope<AuthUser>>(`${prefix}/login`, {
        method: 'POST',
        body: credentials
    });
    return res.data
}