import { Route } from 'react-router-dom';
import HomeUserDash from '../../../components/UserDashboard/HomeUserDash';
import Orders from '../../../components/UserDashboard/Orders';
import NotFoundRoutes from '../../../utils/NotFoundRoutes';
import { PrivateRoutesDash } from "../private-user-routes";


export function UserDash() {
    return (
    <NotFoundRoutes>
      <Route path={`/`}  element={<HomeUserDash/>} />
      <Route path={`${PrivateRoutesDash.ORDERS}`} element={<Orders/>} />
      <Route path={PrivateRoutesDash.PAGINA_3} element={<h1>Pagina 3</h1>} />
    </NotFoundRoutes>
  );
};