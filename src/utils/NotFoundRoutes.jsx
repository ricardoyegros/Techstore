import { Route, Routes } from 'react-router-dom';

function NotFoundRoutes({ children }) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Rout Not Found</div>} />
    </Routes>
  );
}
export default NotFoundRoutes;