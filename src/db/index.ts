import { CommentWithReplies, mock_data, Post } from "./posts";

// This is a mock database for testing purposes

export type CreatePostParams = {
  title: string;
  content: string;
  image?: string;
};

export type CreateCommentParams = {
  content: string;
  postId: string;
  parentCommentId?: string;
};

class MockDatabase {
  private posts: Post[] = mock_data.posts;

  private async findComment(
    comments: CommentWithReplies[],
    commentId: string
  ): Promise<CommentWithReplies | null> {
    for (const comment of comments) {
      if (comment.id === commentId) {
        return comment;
      }
      const found = this.findComment(comment.replies, commentId);
      if (found) {
        return found;
      }
    }
    return null;
  }

  // Get all posts
  public async getPosts(): Promise<Post[]> {
    return this.posts;
  }

  // Get a single post by ID
  public async getPostById(postId: string): Promise<Post | null> {
    return this.posts.find((post) => post.id === postId) || null;
  }

  // Get comments for a specific post
  public async getComments(postId: string): Promise<CommentWithReplies[]> {
    const post = await this.getPostById(postId);
    return post?.comments || [];
  }

  // Get a specific comment by ID
  public async getCommentById(
    postId: string,
    commentId: string
  ): Promise<CommentWithReplies | null> {
    const post = await this.getPostById(postId);
    if (!post) return null;
    return this.findComment(post.comments, commentId);
  }

  // Add a new post
  public async addPost(params: CreatePostParams): Promise<Post> {
    const authorId = "101"; // Default author ID
    const newPost: Post = {
      id: crypto.randomUUID(), // Generate a unique ID
      title: params.title,
      content: params.content,
      image: params.image || null,
      createdAt: new Date().toISOString(),
      author: {
        id: authorId,
        name: "John Doe",
        avatar: "/avatar.jpg",
      },
      comments: [],
    };

    this.posts = [newPost, ...this.posts];
    return newPost; // Make sure a new reference to posts is created
  }

  // Add a new comment
  public async addComment(
    params: CreateCommentParams
  ): Promise<CommentWithReplies | null> {
    const post = await this.getPostById(params.postId);
    if (!post) throw new Error(`Post with ID ${params.postId} not found`);

    const newComment: CommentWithReplies = {
      id: crypto.randomUUID(),
      content: params.content,
      createdAt: new Date().toISOString(),
      author: {
        id: "101",
        name: "Some user",
        avatar: "/user.jpg",
      },
      replies: [],
    };

    if (params.parentCommentId) {
      // Add as a reply to an existing comment
      const parentComment = await this.findComment(
        post.comments,
        params.parentCommentId
      );

      if (!parentComment)
        throw new Error(
          `Invalid parent comment. Comment with ID ${params.parentCommentId} not found`
        );

      parentComment.replies.push(newComment);
    } else {
      // Add as a top-level comment
      post.comments.push(newComment);
    }
    this.posts = [...this.posts]; // Make sure a new reference to posts is created
    return newComment;
  }
}

export const db = new MockDatabase();
