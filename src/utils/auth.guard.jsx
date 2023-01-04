import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../routes/public-routes/"
const AuthGuard = () => {
  const user = {
    name: "a",
  };
  //const user = useSelector((store) => store.user);
  return user.name ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.SING_IN} />
  );
};

export default AuthGuard;
