import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import {PrivateRoutes} from "../routes/privates-routes/private-user-routes"
function AdminGuard() {
  //const user = useSelector((store) => store.user);
  const user = {
    rol: "User",
  }
  return user.rol ? <Outlet /> : <Navigate replace to={PrivateRoutes.USER} />;
}
export default AdminGuard;