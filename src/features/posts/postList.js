import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./postItem";
import { getPosts } from "./postSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const { isLoading, posts } = useSelector((store) => store.posts);
  const { isOpen } = useSelector((store) => store.modal);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      {isOpen && <div>Modal</div>}
      {posts.map((post) => {
        return <PostItem key={post.id} {...post} />;
      })}
    </section>
  );
};

export default PostList;
