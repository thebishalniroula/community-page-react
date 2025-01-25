export type Author = {
  id: string;
  name: string;
  avatar: string;
};

export type Comment = {
  id: string;
  content: string;
  createdAt: string;
  author: Author;
};

export type CommentWithReplies = Comment & {
  replies: CommentWithReplies[];
};

export type Post = {
  id: string;
  title: string;
  content: string;
  image: string | null;
  createdAt: string;
  author: Author;
  comments: CommentWithReplies[];
};

export type MockDB = {
  posts: Post[];
};

export const mock_data: MockDB = {
  posts: [
    {
      id: "1",
      title: "Exploring the New Features of JavaScript",
      content:
        "JavaScript has introduced some exciting features in the latest release. Let's discuss!",
      image: "https://example.com/images/javascript-update.jpg",
      createdAt: "2025-01-20T10:00:00Z",
      author: {
        id: "101",
        name: "John Doe",
        avatar: "https://example.com/avatars/john-doe.jpg",
      },
      comments: [
        {
          id: "201",
          content:
            "I love the new optional chaining feature. It's a game changer!",
          createdAt: "2025-01-20T11:00:00Z",
          author: {
            id: "102",
            name: "Jane Smith",
            avatar: "https://example.com/avatars/jane-smith.jpg",
          },
          replies: [
            {
              id: "202",
              content: "Totally agree! It makes the code so much cleaner.",
              createdAt: "2025-01-20T11:15:00Z",
              author: {
                id: "103",
                name: "Bob Brown",
                avatar: "https://example.com/avatars/bob-brown.jpg",
              },
              replies: [
                {
                  id: "203",
                  content:
                    "Have you tried combining it with nullish coalescing? It's even better!",
                  createdAt: "2025-01-20T11:20:00Z",
                  author: {
                    id: "104",
                    name: "Alice Green",
                    avatar: "https://example.com/avatars/alice-green.jpg",
                  },
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          id: "204",
          content:
            "Does anyone know if these features are supported in older browsers?",
          createdAt: "2025-01-20T11:30:00Z",
          author: {
            id: "105",
            name: "Eve White",
            avatar: "https://example.com/avatars/eve-white.jpg",
          },
          replies: [
            {
              id: "205",
              content:
                "You'll need a transpiler like Babel for older browsers.",
              createdAt: "2025-01-20T11:45:00Z",
              author: {
                id: "106",
                name: "Chris Black",
                avatar: "https://example.com/avatars/chris-black.jpg",
              },
              replies: [
                {
                  id: "206",
                  content: "Which Babel preset do you recommend for this?",
                  createdAt: "2025-01-20T12:00:00Z",
                  author: {
                    id: "107",
                    name: "Sophia Blue",
                    avatar: "https://example.com/avatars/sophia-blue.jpg",
                  },
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "2",
      title: "What's your favorite programming language?",
      content:
        "I'm curious to know which programming language everyone prefers and why!",
      image: null,
      createdAt: "2025-01-19T15:00:00Z",
      author: {
        id: "108",
        name: "Liam Gray",
        avatar: "https://example.com/avatars/liam-gray.jpg",
      },
      comments: [
        {
          id: "207",
          content:
            "I love Python because of its simplicity and vast libraries!",
          createdAt: "2025-01-19T16:00:00Z",
          author: {
            id: "109",
            name: "Mia Violet",
            avatar: "https://example.com/avatars/mia-violet.jpg",
          },
          replies: [
            {
              id: "208",
              content: "Which Python libraries do you use the most?",
              createdAt: "2025-01-19T16:30:00Z",
              author: {
                id: "110",
                name: "Oliver Red",
                avatar: "https://example.com/avatars/oliver-red.jpg",
              },
              replies: [
                {
                  id: "209",
                  content:
                    "For me, it's definitely Pandas and NumPy for data analysis!",
                  createdAt: "2025-01-19T16:45:00Z",
                  author: {
                    id: "111",
                    name: "Emma Gold",
                    avatar: "https://example.com/avatars/emma-gold.jpg",
                  },
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          id: "210",
          content: "JavaScript is my favorite because it runs everywhere.",
          createdAt: "2025-01-19T17:00:00Z",
          author: {
            id: "112",
            name: "Lucas Silver",
            avatar: "https://example.com/avatars/lucas-silver.jpg",
          },
          replies: [
            {
              id: "211",
              content:
                "True, but what about TypeScript? It adds so much safety!",
              createdAt: "2025-01-19T17:15:00Z",
              author: {
                id: "113",
                name: "Isabella Bronze",
                avatar: "https://example.com/avatars/isabella-bronze.jpg",
              },
              replies: [
                {
                  id: "212",
                  content:
                    "Agreed! TypeScript has been a game-changer for our team.",
                  createdAt: "2025-01-19T17:30:00Z",
                  author: {
                    id: "114",
                    name: "Mason Platinum",
                    avatar: "https://example.com/avatars/mason-platinum.jpg",
                  },
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
