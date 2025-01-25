export type Author = {
    id: string
    name: string
    avatar: string
}

export type Comment = {
    id: string
    content: string
    createdAt: string
    author: Author
}

export type CommentWithReplies = Comment & {
    replies: CommentWithReplies[]
}

export type Post = {
    id: string
    title: string
    content: string
    image: string | null
    createdAt: string
    author: Author
    comments: CommentWithReplies[]
}

export type MockDB = {
    posts: Post[]
}

export const mock_data: MockDB = {
    posts: [
        {
            id: '1',
            title: 'Bootstrapping a Social Media Platform',
            content:
                'We are bootstrapping @konnect22 a social media to connect individuals with successful people to bring out the best in them',
            image: null,
            createdAt: '2024-01-20T10:00:00Z',
            author: {
                id: 'a1',
                name: 'Sarah Wilson',
                avatar: '/placeholder.svg',
            },
            comments: [
                {
                    id: 'c1',
                    content:
                        'This is exactly what we need! Looking forward to seeing this grow.',
                    createdAt: '2024-01-20T10:30:00Z',
                    author: {
                        id: 'a2',
                        name: 'Michael Chen',
                        avatar: '/placeholder.svg',
                    },
                    replies: [
                        {
                            id: 'c2',
                            content:
                                'Agreed! The mentorship aspect could be really valuable.',
                            createdAt: '2024-01-20T11:00:00Z',
                            author: {
                                id: 'a3',
                                name: 'Emma Davis',
                                avatar: '/placeholder.svg',
                            },
                            replies: [
                                {
                                    id: 'c3',
                                    content:
                                        "I'm also interested in mentoring others. How can I get involved?",
                                    createdAt: '2024-01-20T11:30:00Z',
                                    author: {
                                        id: 'a4',
                                        name: 'Alex Thompson',
                                        avatar: '/placeholder.svg',
                                    },
                                    replies: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'c4',
                    content:
                        'How do you plan to verify the credentials of mentors?',
                    createdAt: '2024-01-20T12:00:00Z',
                    author: {
                        id: 'a4',
                        name: 'Alex Thompson',
                        avatar: '/placeholder.svg',
                    },
                    replies: [],
                },
            ],
        },
    ],
}
