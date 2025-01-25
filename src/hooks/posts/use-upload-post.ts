import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/config/query'
import { CreatePostParams, db } from '@/db'

const useUploadPost = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (newPost: CreatePostParams) => {
            return await db.addPost(newPost)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.GET_POSTS() })
        },
    })
}

export default useUploadPost
