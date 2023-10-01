import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuth } = useSelector((state) => state.auth);
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
