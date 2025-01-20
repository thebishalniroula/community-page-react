import { mock_data } from "./posts";

type Posts = typeof mock_data.posts;

const db = {
  addNewPost: (newPost: Posts[number]) => {
    mock_data.posts.unshift(newPost);
    return mock_data[0];
  },

  getPosts: () => {
    return mock_data.posts;
  },

  getPost: (id: number) => {
    return mock_data.posts.find((post) => post.id === id);
  },

  addComment: ({
    newComment,
    replyingTo,
  }: {
    newComment: Posts[number]["comments"][number];
    replyingTo: {
      postId: number;
      commentId?: number;
    };
  }) => {
    const post = mock_data.posts.find((post) => post.id === replyingTo.postId);
    if (!post) throw new Error("Post not found");

    if (!replyingTo.commentId) {
      post.comments.unshift(newComment);
    } else {
      const comment = post.comments.find(
        (comment) => comment.id === replyingTo.commentId
      );
      if (!comment) throw new Error("Comment not found");
      comment.replies.unshift(newComment);
    }
    return mock_data[0];
  },

  getComments: (id: number) => {
    return mock_data.posts.find((post) => post.id === id)?.comments || [];
  },
};

type DB = typeof db;
type PromisifiedDB = {
  [K in keyof DB]: (...args: Parameters<DB[K]>) => Promise<ReturnType<DB[K]>>;
};

const promisifiedDb = Object.keys(db).reduce((acc, key) => {
  return {
    ...acc,
    [key]: (...args: Parameters<DB[keyof DB]>) =>
      Promise.resolve(db[key](...args)),
  };
}, {} as PromisifiedDB);

export default promisifiedDb;
