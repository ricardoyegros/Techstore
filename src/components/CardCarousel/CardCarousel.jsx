import React from "react";
import { Link } from "react-router-dom";
import {PublicRoutes} from "../../routes/public-routes"


export const CardCarousel = ({product}) => {
  return (
    <Link to={`${PublicRoutes.DETAIL}/${product.id}`}>
    <div className="w-[320px] h-[140px] border-solid border-2 border-border rounded-2xl flex items-center justify-center gap-6 p-5">
      <img
        src={product.images[0]?.url}
        alt="loading..."
        className="h-28 w-28"
      />
      <div className="h-full flex justify-center items-center text-primary flex-col bg-transparent">
        <h4>({product.name.substr(0, 20) + "..."})</h4>
      </div>
    </div>
    </Link>
  );
};
