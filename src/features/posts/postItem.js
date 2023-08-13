import { Link } from "react-router-dom";

const PostItem = ({ id, title, body, date }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p className="excerpt">{body}...</p>
      <p className="postCredit">
        <Link to={`posts/${id}`}>View Post</Link>
      </p>
    </article>
  );
};

export default PostItem;
