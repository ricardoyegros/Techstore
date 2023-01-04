import { Navigate, Route } from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import NotFoundRoutes from '../../../utils/NotFoundRoutes';
import {privateAdminRoutes} from "../privates-admin-routes/";

export function Admin() {
  return (
    <NotFoundRoutes>
      <Route path="/" element={<Navigate to='/admin/dashboard' />} />
      <Route path={privateAdminRoutes.DASHBOARD} element={<Layout><h1>Soy el dashboard del admin!!!</h1></Layout>} />
      <Route path={privateAdminRoutes.REVIEWS} element={<Layout><h1>Soy el reviews!!!</h1></Layout>} />
    </NotFoundRoutes>
  );
}