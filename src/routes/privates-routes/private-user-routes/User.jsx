import { Navigate, Route } from 'react-router-dom';
import NotFoundRoutes from '../../../utils/NotFoundRoutes';
import {PrivateRoutes} from "../private-user-routes";
import Wishlist from "../../../pages/Wishlist/Wishlist"
import { UserDash } from './UserDash';
import Orders from '../../../components/UserDashboard/Orders';
import PaymentForm from '../../../pages/PaymentForm/PaymentForm';

export function User() {
    return (
    <NotFoundRoutes>
      <Route path="/" element={<Navigate to='/' />} />
      <Route path={PrivateRoutes.WISHLIST} element={<Wishlist />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<UserDash />} />
      <Route path={PrivateRoutes.ORDERS} element={<Orders/>} />
      <Route path={PrivateRoutes.SHIPPING_FORM} element={<PaymentForm/>} />
    </NotFoundRoutes>
  );
}