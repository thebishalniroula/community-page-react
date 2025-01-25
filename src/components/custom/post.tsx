import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import type { Post } from '@/db/posts'
import { formatDate } from '@/lib/format-date'
import { Eye, Heart, MessageSquare } from 'lucide-react'
import { Comment } from './comment'
import { getInitials } from '@/lib/name-initials'

interface PostProps {
    post: Post
}

export default function Post({ post }: PostProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
                <Avatar>
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback>
                        {getInitials(post.author.name)}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-medium">{post.author.name}</span>
                    <span className="text-xs text-muted-foreground">
                        {formatDate(post.createdAt)}
                    </span>
                </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
                {post.title && (
                    <h2 className="text-xl font-semibold leading-tight">
                        {post.title}
                    </h2>
                )}
                <p>{post.content}</p>
                {post.image && (
                    <img
                        src={post.image || '/placeholder.svg'}
                        alt=""
                        className="w-full rounded-lg object-cover"
                    />
                )}
            </CardContent>
            <CardFooter className="flex items-center gap-6 pt-0 text-muted-foreground">
                <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span className="text-xs">27</span>
                </div>
                <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span className="text-xs">9</span>
                </div>
                <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-xs">{post.comments.length}</span>
                </div>
            </CardFooter>
            <div className="space-y-3 border-t px-6 py-3">
                {post.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        </Card>
    )
}
