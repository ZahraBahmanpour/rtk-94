import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./postSlice";

const PostList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
};

export default PostList;
