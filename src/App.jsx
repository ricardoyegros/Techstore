import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import NotFoundRoutes from "../src/utils/NotFoundRoutes"
import { Provider } from "react-redux";
import store from "../src/redux/store"
import AuthGuard from "./utils/auth.guard";
import AdminGuard from "./utils/admin.guard";
import { Admin } from "./routes/privates-routes/privates-admin-routes/Admin";
import { privateAdminRoutes } from "./routes/privates-routes/privates-admin-routes";
import { PrivateRoutes } from "./routes/privates-routes/private-user-routes";
import { User } from "./routes/privates-routes/private-user-routes/User";
import HomePage from "./pages/Homepage";
import { PublicRoutes } from "./routes/public-routes";
import { lazy, Suspense } from "react";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import { Details } from "./pages/Details";
import ForgetPassword from './components/SignInForm/ForgetPassword';


const SignIn = lazy(() => import("./pages/auth/Sign In/SignIn"));
const SignUp = lazy(() => import("./pages/auth/SignUp/SignUp"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

function App() {

  return (
    <div className="App">
      <Suspense fallback={<h1>Cargando.............</h1>}>
        <Provider store={store}>
          <BrowserRouter>
            <NotFoundRoutes>
              <Route path="/" element={<HomePage />} />
              <Route path={PublicRoutes.SING_IN} element={<SignIn />} />
              <Route path={PublicRoutes.SING_UP} element={<SignUp />} />
              <Route path={PublicRoutes.CONTACT} element={<Contact />} />
              <Route path={PublicRoutes.SHOPPING_CART} element={<ShoppingCart />} />
              <Route path={PublicRoutes.DETAIL_ITEM} element={<Details />} />
              <Route path={PublicRoutes.FORGET_PASSWORD} element={<ForgetPassword/>} />
              <Route element={<AuthGuard />}>
                <Route path={`${PrivateRoutes.USER}/*`} element={<User />} />
              </Route>
              <Route element={<AdminGuard />}>
                <Route path={`${privateAdminRoutes.ADMIN}/*`} element={<Admin />} />
              </Route>
            </NotFoundRoutes>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
