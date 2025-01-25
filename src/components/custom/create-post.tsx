import useUploadPost from '@/hooks/posts/use-upload-post'
import { toast } from '@/hooks/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z, ZodSchema } from 'zod'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { CreatePostParams } from '@/db'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '../ui/input'
import useUser from '@/hooks/use-user'
import { getInitials } from '@/lib/name-initials'

const zCreatePost: ZodSchema<CreatePostParams> = z.object({
    title: z
        .string()
        .trim()
        .min(3, { message: 'Title must be at least 3 characters' }),
    content: z.string().min(10),
    image: z.string().optional(),
})

export function CreatePost() {
    const user = useUser()
    const addPostMutation = useUploadPost()

    const form = useForm<CreatePostParams>({
        resolver: zodResolver(zCreatePost),
    })

    // If user is not logged in, return null
    if (!user) {
        return null
    }

    const handleSubmit = async (data: CreatePostParams) => {
        try {
            await addPostMutation.mutateAsync(data)
            toast({
                title: 'Post added successfully',
            })
            form.reset()
        } catch (error) {
            if (error instanceof Error) {
                toast({
                    title: error.message,
                    variant: 'destructive',
                })
            }
        }
    }

    return (
        <Card className="bg-secondary">
            {/* Logged in user info */}
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
                <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="bg-white">
                        {getInitials(user.name)}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">
                        Share something
                    </span>
                </div>
            </CardHeader>
            {/* Create post form */}
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <CardContent className="space-y-4">
                    <Input
                        {...form.register('title')}
                        placeholder="Enter post title"
                        className="border border-black/20 bg-transparent text-lg font-medium focus-visible:ring-0"
                    />
                    {form.formState.errors.title && (
                        <p className="text-sm text-destructive">
                            {form.formState.errors.title.message}
                        </p>
                    )}
                    <Textarea
                        {...form.register('content')}
                        placeholder="What's on your mind?"
                        className="min-h-[100px] resize-none border border-black/20 bg-transparent focus-visible:ring-0"
                    />
                    {form.formState.errors.content && (
                        <p className="text-sm text-destructive">
                            {form.formState.errors.content.message}
                        </p>
                    )}
                </CardContent>
                <CardFooter className="justify-end border-t pt-4">
                    <Button
                        type="submit"
                        disabled={
                            addPostMutation.isPending || !form.formState.isValid
                        }
                    >
                        {addPostMutation.isPending ? 'Posting...' : 'Post'}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
