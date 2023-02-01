import { Route, Routes } from 'react-router-dom';
import NotFound from '../components/404 Not Found/NotFound';
// Crear componente de Route Not Found

function NotFoundRoutes({ children }) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}
export default NotFoundRoutes;