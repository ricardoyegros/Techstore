import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, removeItemFromCart, removeOneFromCart } from "../../redux/actions/cartActions";
import { PublicRoutes } from "../../routes/public-routes";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subTitle = ["Cantidad", "Precio Unitario", "Sub-Total"];
  const shipping = 10;
  const cart = useSelector((state)=> state.shoppingCartReducer.cart);

  return (
    <div className="container mx-auto mt-10 ">
      <div className="flex shadow-md mb-20">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className=" bg-sky w-full h-10">
            <div className="pt-1.5 flex justify-center text-center mt-10 mb-5">
              <h1 className="font-semibold text-primary text-lg uppercase w-2/5">
                Detalle del Carrito
              </h1>
              {subTitle.map((titles) => (
                <h1
                  key={titles}
                  className="font-semibold text-primary text-lg uppercase w-1/5 text-center"
                >
                  {titles}
                </h1>
              ))}
            </div>
          </div>
          {cart.map((item) => (
            <div
              key={item}
              className="flex items-center hover:bg-gray-100  px-8 py-5"
            >
              <div className="flex w-2/5">
                <div className="w-20 ">
                  <img
                    className="h-24 w-28 hover:cursor-pointer"
                    src={item.images[0]?.url || ""}
                    alt=""
                    onClick={()=>navigate(`/${PublicRoutes.DETAIL}/${item.id}`)}
                  />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span onClick={()=>navigate(`/${PublicRoutes.DETAIL}/${item.id}`)} className="font-bold text-primary text-sm hover:cursor-pointer">
                    {item.name.substr(0, 28) + "..."}
                  </span>
                  <span className="text-secondary font-semibold text-xs">
                    {item.brand.name}
                  </span>
                  <span className="text-primary font-semibold text-xs">
                    Stock disponible: {item.stock} u.
                  </span>
                  <span
                    onClick={()=>dispatch(removeItemFromCart(item.id))}
                    className=" hover:cursor-pointer font-semibold hover:text-error hover:font-bold text-gray-500 text-xs"
                  >
                    Eliminar
                  </span>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg
                  className="fill-current text-gray-600 w-3 hover:cursor-pointer"
                  viewBox="0 0 448 512"
                  onClick={item.quantity > 1 ? ()=>dispatch(removeOneFromCart(item.id)) : ""}
                >
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value={item.quantity}
                />

                <svg
                  className="fill-current text-gray-600 w-3 hover:cursor-pointer"
                  viewBox="0 0 448 512"
                  onClick={item.stock > item.quantity ? ()=>dispatch(addToCart(item.name)): ""}
                >
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold pl-5 text-sm">
                ${item.salePrice}
              </span>
              <span className="text-center w-1/5 text-secondary pl-10 font-bold text-sm">
                ${Math.round(item.quantity * item.salePrice)}
              </span>
            </div>
          ))}

          <Link replace to={"/"}
            className="flex font-semibold text-primary text-sm mt-10 hover:cursor-pointer hover:font-bold"
          >
            <svg
              className="fill-current mr-2 text-primary w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continuar Comprando
          </Link>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-center text-2xl text-primary border-b pb-8">
            <u>Resumen de compra</u>
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Cantidad de Items: {cart.reduce((total, item) => total = total + item.quantity,0)}
            </span>
            <span className="font-semibold text-sm">${Math.round(cart.reduce((total, item) => total = total + (item.salePrice * item.quantity),0))}</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Envío
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Envío Normal a todo el país - ${shipping}</option>
            </select>
          </div>
          <div className="py-10">
            <label
              for="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Código de Descuento
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Ingresá tu código aquí"
              className="p-2 text-sm w-full border-solid border-primary border-[1px]"
            />
          </div>
          <button className="bg-secondary hover:font-semibold px-5 py-2 text-sm text-black uppercase">
            Aplicar
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Costo Total</span>
              <span>${Math.round(cart.reduce((total, item) => total = total + (item.salePrice * item.quantity),shipping))}</span>
            </div>
            <button className="bg-primary font-semibold hover:font-bold py-3 text-sm text-white uppercase w-full"
            onClick={() => navigate('/user/shipping-form')}
            >
              Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
