import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../routes/public-routes/"
const AuthGuard = () => {
    const isLogged =JSON.parse(sessionStorage.getItem("user"));
  
     return isLogged ? (
       <Outlet />
     ) : (
       <Navigate replace to={PublicRoutes.SING_IN} />
     );
  
  //const user = useSelector((store) => store.user);
};

export default AuthGuard;
