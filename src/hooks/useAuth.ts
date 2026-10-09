import { fetchLogin, fetchMe } from "@/api/auth"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useAuth = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: fetchLogin,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user_profile"] })
        }
    })
}

export const useMe = () => {
    return useQuery({
        queryKey: ["user_profile"],
        queryFn: fetchMe,
        retry: false,
        staleTime: 1000 * 60 * 5,
    })
}
