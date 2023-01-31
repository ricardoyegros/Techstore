import { Navbar } from "../Navbar/Navbar";
import LocationLogo from "../../assets/Location-logo.svg";
import ShippingLogo from "../../assets/Shipping-logo.svg";
import { useSelector } from "react-redux";

export default function Header() {
   let user = useSelector((state)=>state.userReducer);
  if(user && !user.name){
    user = JSON.parse(sessionStorage.getItem("user"))
  }

console.log(user); 
  return (
    <>
      <div className="w-full flex justify-center items-center h-16 ">
        <div className="text-text1 font-bold sm:hidden">
          {/* Dentro de este div iria lo que se va a ver en modo responsive */}
          <h2>TechStore</h2>
        </div>
        <div className="flex w-4/5 items-center justify-between h-7 -sm:hidden">
          <h4>¿Necesitas Ayuda? Contactanos +54 3704716194</h4>
          {/* aca traer de reducer el nombre de usuario asi lo hacemos dinámico */}
           <h4>{user?.name ? `Bienvenido/a ${user.name}`  : "Bienvenido invitado/a"}</h4> 
          <h4 className="hover:cursor-pointer" onClick={()=>sessionStorage.clear()}>Logout</h4>
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
  )
}