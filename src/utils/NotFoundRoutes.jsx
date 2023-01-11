import { Route, Routes } from 'react-router-dom';

// Crear componente de Route Not Found

function NotFoundRoutes({ children }) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Route Not Found</div>} />
    </Routes>
  );
}
export default NotFoundRoutes;