import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronRight, MessageSquare } from 'lucide-react'
import { formatDate } from '@/lib/format-date'
import { CommentWithReplies } from '@/db/posts'

interface CommentProps {
    comment: CommentWithReplies
    depth?: number
}

export function Comment({ comment, depth = 0 }: CommentProps) {
    // For comments with depth > 2, show the replies by default
    const [isExpanded, setIsExpanded] = useState(depth < 2)
    const hasReplies = comment.replies.length > 0

    return (
        <div className="space-y-3">
            <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                    <AvatarImage src={comment.author.avatar} />
                    <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                            {comment.author.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                            {formatDate(comment.createdAt)}
                        </span>
                    </div>
                    <p className="text-sm">{comment.content}</p>
                </div>
            </div>

            {hasReplies && (
                <div className="pl-11">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-auto p-0 text-muted-foreground"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <div className="flex items-center gap-1">
                            {isExpanded ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            )}
                            <MessageSquare className="h-4 w-4" />
                            <span className="text-xs">
                                {comment.replies.length} replies
                            </span>
                        </div>
                    </Button>

                    {isExpanded && (
                        <div className="mt-3 space-y-3 border-l-2 border-muted pl-4">
                            {comment.replies.map((reply) => (
                                <Comment
                                    key={reply.id}
                                    comment={reply}
                                    depth={depth + 1}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
