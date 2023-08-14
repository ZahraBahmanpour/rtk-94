import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  console.log(children);
  return token ? children : <Navigate to="/login" />;
};
export default RequireAuth;
