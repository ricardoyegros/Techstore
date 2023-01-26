import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavLogo from "../../assets/Fav-logo.svg";
import FavNoLogo from "../../assets/FavNo-logo.svg";
import CartLogo from "../../assets/cart-logo-product.svg";
import { StarRating } from "../StarsRating/StarRating";
import {PublicRoutes} from "../../routes/public-routes"

export const MainCard = ({ salePrice, name, images, id }) => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  return (
    <div className="flex flex-col w-[250px] h-[250px] items-center bg-transparent border-border border-2 rounded-3xl">
      <div className="flex justify-center w-[90%]">
        <img
          onClick={() => navigate(`/${PublicRoutes.DETAIL_ITEM}?id=${id}`)}
          src={images[0].url}
          alt="loading..."
          className="h-36 w-36 mt-2.5 p-3 rounded-3xl select-none hover:cursor-pointer"
        />
        <button
          onClick={() => setState(!state)}
          className="absolute mt-4 ml-48 rounded-full p-1"
        >
          {
            <img
              src={state ? FavLogo : FavNoLogo}
              alt="loading..."
              className="w-6 h-6 hover:scale-125 transition-all"
            />
          }
        </button>
        <button className="absolute mt-14 ml-48 rounded-full p-1">
          {
            <img
              src={CartLogo}
              alt="cart logo"
              className="w-7 h-7 hover:scale-125 transition-all"
            />
          }
        </button>
      </div>
      <div className="w-[90%] h-full flex flex-col items-center text-primary">
        <StarRating numberOfStars={3.5} sizeStar={8} />
        <h4>{name.substr(0, 16) + "..."}</h4>
        <h5>Price: {"$ " + salePrice}</h5>
      </div>
    </div>
  );
};
