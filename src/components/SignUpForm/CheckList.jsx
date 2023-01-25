import React, { useState } from "react";
import CheckLogo from "../../assets/CheckLogo/CheckLogo";
import MailCheck from "../../pages/auth/SignUp/MailCheck";
import NameCheck from "../../pages/auth/SignUp/NameCheck";
import PasswordCheck from "../../pages/auth/SignUp/PasswordCheck";

function CheckList() {

  const [user, setUser] = useState({});
  const [errorMsg, setErrorMsg] = useState({})
  const [openCheck, setOpenCheck] = useState({
     mail: false ,
     name: false ,
    password: false,
});
  console.log(errorMsg,"errores")
  const mailCheckButton = () => {
    if (user && user.email && !errorMsg?.email.length) {
      return (<button onClick={()=>setOpenCheck({...openCheck,mail:!openCheck.mail})} type="button" className=" flex items-center  justify-center bg-secondary rounded-lg p-1">
      Editar<CheckLogo />
      </button>)
    } else {
      return <button onClick={()=>setOpenCheck({...openCheck,mail:!openCheck.mail})} className="bg-secondary rounded-lg p-2">{openCheck.mail ? "Cerrar" : "Ingresar"}</button>;
    }
  };

   const nameCheckButton = () => {
    if (user && user.name) {
      return <CheckLogo />;
    } else {
      return <button onClick={()=>setOpenCheck({...openCheck,name:!openCheck.name})}  className="bg-secondary rounded-lg p-2">{openCheck.name ? "Cerrar" : "Ingresar"}</button>;
    }
  };

  const passwordCheckButton = () => {
    if (user && user.password) {
      return <CheckLogo />;
    } else {
      return <button onClick={()=>setOpenCheck({...openCheck,password:!openCheck.password})} className="bg-secondary rounded-lg p-2">{openCheck.password ? "Cerrar" : "Ingresar"}</button>;
    }
  }; 
  const IdCheckButton = () => {
    if (user && user.id) {
      return <CheckLogo />;
    } else {
      return <button onClick={()=>setOpenCheck({...openCheck,id:!openCheck.id})} className="bg-secondary rounded-lg p-2">{openCheck.password ? "Cerrar" : "Ingresar"}</button>;
    }
  }; 

  return (
    <div className="flex flex-col gap-5 w-full ml-4">
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="flex flex-col w-full ">
            <p className="text-lg">Ingresá tu email</p>
            <p className="text-sm">
              Solo recibirás notificaciones, nada de spam.
            </p>
          </div>
          {mailCheckButton()}
        </div>
        {openCheck.mail && <MailCheck errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser} />}
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresá tu nombre completo</p>
          <p className="text-sm">Así sabremos como llamarte</p>
        </div>
         {nameCheckButton()} 
      </div>
         {openCheck.name && <NameCheck  errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} setOpenCheck={setOpenCheck} setUser={setUser} />}
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresá una contraseña</p>
          <p className="text-sm">
            Debe tener entre 5 a 12 carácteres y al menos una mayúscula.
          </p>
        </div>
       {passwordCheckButton()}
      </div>
      {openCheck.password && <PasswordCheck user={user} setOpenCheck={setOpenCheck} setUser={setUser} />}
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresa tu número de identificación.</p>
          <p className="text-sm">
          Te lo guardamos para rellenar datos de facturacion en caso de.
          </p>
        </div>
{/*        {passwordCheckButton()}
 */}      </div>
{/*       {openCheck.password && <PasswordCheck user={user} setOpenCheck={setOpenCheck} setUser={setUser} />}
 */}      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresá una contraseña</p>
          <p className="text-sm">
            Debe tener entre 5 a 12 carácteres y al menos una mayúscula.
          </p>
        </div>
{/*        {passwordCheckButton()}
 */}      </div>
{/*       {openCheck.password && <PasswordCheck user={user} setOpenCheck={setOpenCheck} setUser={setUser} />}
 */}      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresá una contraseña</p>
          <p className="text-sm">
            Debe tener entre 5 a 12 carácteres y al menos una mayúscula.
          </p>
        </div>
{/*        {passwordCheckButton()}
 */}      </div>
{/*       {openCheck.password && <PasswordCheck user={user} setOpenCheck={setOpenCheck} setUser={setUser} />}
 */}    </div>
  );
}

export default CheckList;
