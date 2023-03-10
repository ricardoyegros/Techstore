import React from "react";
import SignInForm from "../../../components/SignInForm/SignInForm";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../../routes/public-routes";
import Layout from "../../../components/Layout/Layout";

function SignIn() {

  return (
    <Layout>
      <div className="flex flex-col items-center py-12">
        <h1 className="text-4xl pb-12 text-center">Iniciar sesión</h1>
        <SignInForm/>
        <div className="flex gap-3 my-3">
        <Link to={`/${PublicRoutes.FORGET_PASSWORD}`}>
          <p className="text-error font-bold hover:cursor-pointer">¿Olvidaste tu contraseña?</p>
          </Link>
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
