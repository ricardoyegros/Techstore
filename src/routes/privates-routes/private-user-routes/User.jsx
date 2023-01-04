import { Navigate, Route } from 'react-router-dom';
import NotFoundRoutes from '../../../utils/NotFoundRoutes';
import {PrivateRoutes} from "../private-user-routes";

export function User() {
    return (
    <NotFoundRoutes>
      <Route path="/" element={<Navigate to='/' />} />
      <Route path={PrivateRoutes.FINAL_SHOP} element={<h1>Soy el final shop!!!</h1>} />
    </NotFoundRoutes>
  );
}