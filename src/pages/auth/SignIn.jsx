import React , { useState } from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../routes/public-routes";



function SignIn() {
  const navigate = useNavigate()

  /* Se guarda credenciales de usuario */
  const [user, setUser] = useState({})
  
  /* Aca deberia despachar usuario y password para ver si esta bien */

  return (
    <>
      <nav className="bg-primary w-full h-20 flex justify-center items-center">
        <div className="w-[90%] flex justify-between items-center text-text2">
          <div className="flex justify-center items-center gap-8 -sm:w-full -sm:justify-center">
            <h3  className="text-4xl font-bold hover:cursor-pointer ">
              TechStore
            </h3>
          </div>
        </div>
      </nav>
     
      
      <div className="flex flex-col items-center py-12">
      <h1 className="text-4xl pb-12 text-center">Iniciar sesión</h1>
        <SignInForm  setUser={setUser} />
        <div className="flex gap-6 my-3">
          {/* Falta agregar que le mande a esas rutas */}
        <p>¿Olvidaste tu contraseña?</p>
        
        <p onClick={()=>navigate(`/${PublicRoutes.SING_UP}`)}>Crear cuenta</p>
        
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
