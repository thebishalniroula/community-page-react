import { QUERY_KEYS } from '@/config/query'
import { db } from '@/db'
import { useQuery } from '@tanstack/react-query'

const useGetPosts = () => {
    return useQuery({
        queryKey: QUERY_KEYS.GET_POSTS(),
        queryFn: async () => {
            return await db.getPosts()
        },
    })
}

export default useGetPosts
