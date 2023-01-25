import React, { useState } from "react";
import SignInForm from "../../../components/SignInForm/SignInForm";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../../routes/public-routes";
import Layout from "../../../components/Layout/Layout"
function SignIn() {
  /* Se guarda credenciales de usuario */
  const [user, setUser] = useState({});
  /* Aca deberia despachar usuario y password para ver si esta bien */
 
  return (
    <Layout>
      <div className="flex flex-col items-center py-12">
        <h1 className="text-4xl pb-12 text-center">Iniciar sesión</h1>
        <SignInForm user={user} setUser={setUser} />
        <div className="flex gap-3 my-3">
          <p>¿Olvidaste tu contraseña?</p>
          <Link to={`/${PublicRoutes.SING_UP}`}>
          <p className="text-secondary font-bold hover:cursor-pointer">
            Crear cuenta
          </p>
          </Link>
        </div>
      </div>
      </Layout>
  );
}

export default SignIn;
