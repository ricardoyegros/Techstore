import React from "react";
import SignUpFormCheckList from "../../../components/SignUpForm/SignUpFormCheckList";
import Layout from "../../../components/Layout/Layout"
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../../routes/public-routes";
function SignUp() {
  return (
<Layout>
      <div className="flex flex-col items-center my-7">
        <SignUpFormCheckList />
        <p className="my-4 ">¿Ya tienes cuenta?<Link to={`/${PublicRoutes.SING_IN}`}><span className="mx-3 text-secondary font-bold hover:cursor-pointer">Inicia sesión</span></Link></p>
      </div>
</Layout>
  );
}

export default SignUp;