import {BrowserRouter, Route} from "react-router-dom"
import NotFoundRoutes from "../src/utils/NotFoundRoutes"
import { Provider } from "react-redux";
import store from "../src/redux/store"
import AuthGuard from "./utils/auth.guard";
import AdminGuard from "./utils/admin.guard";
import {Admin} from "./routes/privates-routes/privates-admin-routes/Admin";
import  {privateAdminRoutes}  from "./routes/privates-routes/privates-admin-routes";
import  {PrivateRoutes}  from "./routes/privates-routes/private-user-routes";
import { User } from "./routes/privates-routes/private-user-routes/User";
import './App.css';
import HomePage from "./pages/Homepage";
import { PublicRoutes } from "./routes/public-routes";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp/SignUp";
import MailCheck from "./pages/auth/SignUp/MailCheck";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <NotFoundRoutes>
        <Route path="/" element={<HomePage/>}/>
        <Route path={PublicRoutes.SING_IN} element={<SignIn/>}/>
        <Route path={PublicRoutes.SING_UP} element={<SignUp/>}/>
        <Route path={`${PublicRoutes.SING_UP}/${PublicRoutes.SING_UP_MAIL}`} element={<MailCheck/>}/>
        <Route element={<AuthGuard/>}>
        <Route path={`${PrivateRoutes.USER}/*`} element={<User/>}/>
        </Route>
        <Route element={<AdminGuard/>}>
        <Route path={`${privateAdminRoutes.ADMIN}/*`} element={<Admin />}/>
        </Route>
      </NotFoundRoutes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
