import { useParams } from "react-router-dom";
import { useGetPostQuery } from "./postSlice-query";

const PostEdit = () => {
  const { postId } = useParams();
  const { data: post, isLoading } = useGetPostQuery(postId);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" value={post.title} />
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" value={post.body} />
        <button type="button">Save Post</button>
      </form>
    </section>
  );
};

export default PostEdit;
