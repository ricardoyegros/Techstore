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


function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <NotFoundRoutes>
        <Route path="/" element={<h1>Homepage</h1>}/>
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
