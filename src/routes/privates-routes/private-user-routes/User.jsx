import { Navigate, Route } from 'react-router-dom';
import NotFoundRoutes from '../../../utils/NotFoundRoutes';
import {PrivateRoutes} from "../private-user-routes";
import Wishlist from "../../../pages/Wishlist/Wishlist"
import { UserDash } from './UserDash';
import Orders from '../../../components/UserDashboard/Orders';

export function User() {
    return (
    <NotFoundRoutes>
      <Route path="/" element={<Navigate to='/' />} />
      <Route path={PrivateRoutes.FINAL_SHOP} element={<h1>Soy el final shop!!!</h1>} />
      <Route path={PrivateRoutes.SHIPPING_FORM} element={<h1>Soy el shipping form!!!</h1>} />
      <Route path={PrivateRoutes.WISHLIST} element={<Wishlist />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<UserDash />} />
      <Route path={PrivateRoutes.ORDERS} element={<Orders/>} />
    </NotFoundRoutes>
  );
}