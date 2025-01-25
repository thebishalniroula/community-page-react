import { CreatePost } from '@/components/custom/create-post'
import Feed from '@/components/custom/feed'

const CommunityPage = () => {
    return (
        <div className="mx-auto max-w-2xl space-y-6 py-10">
            <h1 className="text-4xl font-bold">Posts</h1>
            <CreatePost />
            <Feed />
        </div>
    )
}

export default CommunityPage
