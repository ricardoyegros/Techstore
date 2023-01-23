import React , { useState } from "react";

import Footer from "../../../components/Footer/Footer";
import SignUpFormCheckList from "../../../components/SignUpForm/SignUpFormCheckList";



function SignUp() {
 
  const [user, setUser] = useState({})


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
      <div className="flex flex-col items-center my-7">
      <SignUpFormCheckList/>
      <p className="my-4">¿Ya tienes cuenta? Inicia sesión</p>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
