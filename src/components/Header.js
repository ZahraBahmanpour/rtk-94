import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post New</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
