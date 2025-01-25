export const QUERY_KEYS = {
  GET_POSTS: () => ["GET_POSTS"] as const,
  GET_POST: (id: number) => ["GET_POST", { id }] as const,
} as const;
