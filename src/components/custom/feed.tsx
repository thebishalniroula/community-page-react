import useGetPosts from '@/hooks/posts/use-get-posts'
import Post from './post'
export default function Feed() {
    const { data: posts, error, isLoading } = useGetPosts()

    // Handle loading state
    if (isLoading) {
        return <p>Loading...</p>
    }

    // Handle error
    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <div className="space-y-6">
            {posts?.length === 0 && (
                <p className="text-center text-muted-foreground">
                    Your feed is empty
                </p>
            )}

            {posts?.map((post) => <Post key={post.id} post={post} />)}
        </div>
    )
}
