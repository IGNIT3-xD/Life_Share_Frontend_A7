import { fetchLogin } from "@/api/auth"
import { useMutation } from "@tanstack/react-query"

export const useAuth = () => {
    return useMutation({
        mutationFn: fetchLogin,
    })
}