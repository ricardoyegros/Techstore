import React , { useState } from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import Footer from "../../components/Footer/Footer";


function SignIn() {
 
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
      <h1 className="text-4xl pb-12 text-center">Sign In</h1>
        <SignInForm  setUser={setUser} />
        <div className="flex gap-6 my-3">
          {/* Falta agregar que le mande a esas rutas */}
        <p>Forgot your password?</p>
        <p>Create acount</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
