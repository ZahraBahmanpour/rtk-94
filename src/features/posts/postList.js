import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiSlice from "../apiSlice";
import PostItem from "./postItem";
import { getPosts } from "./postSlice";
import { useGetPostsQuery } from "./postSlice-query";

const addPost = apiSlice.util.updateQueryData(
  "getPosts",
  undefined,
  (posts) => {
    posts.push({ id: 1, title: "Teddy", body: "This is test body..." });
  }
);

const PostList = () => {
  const dispatch = useDispatch();
  // const { isLoading, posts } = useSelector((store) => store.posts);
  const { isOpen } = useSelector((store) => store.modal);
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, []);

  const { data: posts, isLoading, refetch } = useGetPostsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      {isOpen && <div>Modal</div>}
      <button onClick={() => refetch()}>refresh</button>
      <button onClick={() => dispatch(addPost)}>Add Post</button>
      {posts.map((post) => {
        return <PostItem key={post.id} {...post} />;
      })}
    </section>
  );
};

export default PostList;
