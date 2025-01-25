import useGetPosts from "@/hooks/posts/use-get-posts";

const Posts = () => {
  const posts = useGetPosts();
  console.log(posts.data);
  return (
    <div>
      {posts.data?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
