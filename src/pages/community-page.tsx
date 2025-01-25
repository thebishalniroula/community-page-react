import AddNewPost from "@/components/custom/add-post";
import Posts from "@/components/custom/posts";

const CommunityPage = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold">Posts</h1>
      <AddNewPost />
      <Posts />
    </div>
  );
};

export default CommunityPage;
