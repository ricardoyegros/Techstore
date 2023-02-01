import React from "react";
import { Link } from "react-router-dom";
import  UserLogo  from "../../assets/User-logo.svg"
import {
  PrivateRoutes,
  PrivateRoutesDash,
} from "../../routes/privates-routes/private-user-routes";

function UserDashoardMenu({ children }) {
  return (
    <div className="flex">
      <div className="w-1/12 h-full bg-gray2">
        <ul className=" flex flex-col h-[80vh]    my-3 w-full">
          <span className="flex justify-center  p-3  w-full   hover:bg-gray3">
            <Link to={`/${PrivateRoutes.USER}/${PrivateRoutes.DASHBOARD}`}>
              Cuenta
            </Link>
          </span>
          <span className="flex justify-center  p-3 w-full   hover:bg-gray3">
            <Link
              to={`/${PrivateRoutes.USER}/${PrivateRoutes.DASHBOARD}/${PrivateRoutesDash.ORDERS}`}
            >
              Ordenes
            </Link>
          </span>
        </ul>
      </div>
      {children}
    </div>
  );
}

export default UserDashoardMenu;
