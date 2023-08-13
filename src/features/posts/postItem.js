import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../modal/modalSlice";

const PostItem = ({ id, title, body, date }) => {
  const dispatch = useDispatch();
  const handleDeletePost = (e) => {
    e.preventDefault();
    dispatch(openModal());
  };

  return (
    <article>
      <h2>{title}</h2>
      <p className="excerpt">{body}...</p>
      <p className="postCredit">
        <Link to={`posts/${id}`}>View Post</Link>
        <a onClick={handleDeletePost}>Delete Post</a>
      </p>
    </article>
  );
};

export default PostItem;
