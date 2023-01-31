import { Navbar } from "../Navbar/Navbar";
import LocationLogo from "../../assets/Location-logo.svg";
import ShippingLogo from "../../assets/Shipping-logo.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLogged, setIsLogged] = useState();

  let user = useSelector((state) => state.userReducer);
  let sessionUser = sessionStorage;
 
  useEffect(() => {
    if (!user.name.length && !sessionUser.length) {
      setIsLogged("invitado");
    } else if (user.name.length){
      setIsLogged(user.name)
    } else {
      setIsLogged(JSON.parse(sessionUser.user).name)
    }
  }, [user]);

  return (
    <>
      <div className="w-full flex justify-center items-center h-16 ">
        <div className="text-text1 font-bold sm:hidden">
          {/* Dentro de este div iria lo que se va a ver en modo responsive */}
          <h2>TechStore</h2>
        </div>
        <div className="flex w-4/5 items-center justify-between h-7 -sm:hidden">
          <h4>¿Necesitas Ayuda? Contactanos +54 3704716194</h4>
          <h4>{`Bienvenido/a ${isLogged}`}</h4>

          <div className="flex w-fit items-center gap-16">
            <div className="flex w-fit gap-2 items-center">
              <img src={LocationLogo} className="w-6 h-6" />
              <h4>Nuestra Tienda</h4>
            </div>
            <div className="flex w-fit gap-2 items-center">
              <img src={ShippingLogo} className="w-6 h-6" />
              <h4>Sigue tu pedido</h4>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}
