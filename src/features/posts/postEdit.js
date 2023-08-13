import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPostQuery, useUpdatePostMutation } from "./postSlice-query";

const PostEdit = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading, isSuccess } = useGetPostQuery(postId);
  const [updatePost] = useUpdatePostMutation();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [isSuccess]);

  const handleSavePost = async () => {
    try {
      await updatePost({ id: post.id, title, body });
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="button" onClick={handleSavePost}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default PostEdit;
