import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";
import { getFavoriteProducts } from "../../redux/actions/Wishlist/getFavoritesProducts";
import CartLogo from "../../assets/cart-logo-product.svg";
import { removeFavorite } from "../../redux/actions/Wishlist/removeFavorite";
import { PublicRoutes } from "../../routes/public-routes";

export default function WishProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const prod = useSelector((state) => state.wishlistReducer.products);
  const [products, setproducts] = useState({});
  const subTitle = ["Stock Disponible", "Precio Unitario", "Comprar"];
  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, [dispatch]);
  useEffect(() => {
    setproducts(prod);
  }, [prod]);
  console.log(products);
  return (
    <div className="w-full bg-white px-10 py-10">
      <div className=" bg-error w-full h-10">
        <div className="pt-1.5 flex justify-center text-center mt-10 mb-5">
          <h1 className="font-semibold text-white text-lg uppercase w-2/5">
            Lista de favoritos
          </h1>
          {subTitle.map((titles) => (
            <h1
              key={titles}
              className="font-semibold text-white text-lg uppercase w-1/5 text-center"
            >
              {titles}
            </h1>
          ))}
        </div>
      </div>
      {products.length > 0 && products.map((item) => (
            <div
              key={item}
              className="flex items-center hover:bg-[#fff3f5]  px-8 py-5"
            >
              <div className="flex w-2/5">
                <div className="w-20 ">
                  <img
                    className="h-24 w-28 hover:cursor-pointer"
                    src={item.images[0]?.url || ""}
                    alt=""
                    onClick={() =>
                      navigate(`/${PublicRoutes.DETAIL}/${item.id}`)
                    }
                  />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span
                    onClick={() =>
                      navigate(`/${PublicRoutes.DETAIL}/${item.id}`)
                    }
                    className="font-bold text-primary text-sm hover:cursor-pointer"
                  >
                    {item.name.substr(0, 28) + "..."}
                  </span>
                  <span className="text-secondary font-semibold text-xs">
                    {item.brand.name}
                  </span>
                  <span
                    onClick={() => dispatch(removeFavorite(JSON.parse(JSON.parse(sessionStorage.user)).id,item.id))}
                    className=" hover:cursor-pointer font-semibold hover:text-error hover:font-bold text-gray-500 text-xs"
                  >
                    Eliminar
                  </span>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <span className="mx-2  text-center w-8">{item.stock} u</span>
              </div>
              <span className="text-center w-1/5 font-semibold pl-5 text-sm">
                ${item.salePrice}
              </span>
              <button
                onClick={() => {
                  dispatch(addToCart(item.name))
                  navigate(`/${PublicRoutes.SHOPPING_CART}`);
                }}
                className="ml-36 rounded-full p-1"
              >
                {
                  <img
                    src={CartLogo}
                    alt="cart logo"
                    className="w-7 h-7 hover:scale-125 transition-all"
                  />
                }
              </button>
            </div>
          ))
        }

      <Link
        replace
        to={"/"}
        className="flex font-semibold text-primary text-sm mt-10 hover:cursor-pointer hover:font-bold"
      >
        <svg
          className="fill-current mr-2 text-primary w-4"
          viewBox="0 0 448 512"
        >
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
        Continuar buscando
      </Link>
    </div>
  );
}
