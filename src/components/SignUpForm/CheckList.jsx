import React, { useState } from "react";
import CheckLogo from "../../assets/CheckLogo/CheckLogo";
import MailCheck from "../../pages/auth/SignUp/MailCheck";
import NameCheck from "../../pages/auth/SignUp/NameCheck";
import PasswordCheck from "../../pages/auth/SignUp/PasswordCheck";

function CheckList() {

  const [user, setUser] = useState({});

  const [openCheck, setOpenCheck] = useState({
     mail: false ,
     name: false ,
    password: false,
});

  const mailCheckButton = () => {
    if (user && user.email) {
      return <CheckLogo />;
    } else {
      return <button onClick={()=>setOpenCheck({mail:true,name:false,password:false})} className="bg-secondary rounded-lg p-2">Ingresar</button>;
    }
  };

   const nameCheckButton = () => {
    if (user && user.name) {
      return <CheckLogo />;
    } else {
      return <button onClick={()=>setOpenCheck({mail:false,name:true,password:false})}  className="bg-secondary rounded-lg p-2">Ingresar</button>;
    }
  };

  const passwordCheckButton = () => {
    if (user && user.password) {
      return <CheckLogo />;
    } else {
      return <button onClick={()=>setOpenCheck({mail:false,name:false,password:true})} className="bg-secondary rounded-lg p-2">Ingresar</button>;
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
        {openCheck.mail && <MailCheck user={user} setOpenCheck={setOpenCheck} setUser={setUser} />}
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresá tu nombre completo</p>
          <p className="text-sm">Así sabremos como llamarte</p>
        </div>
         {nameCheckButton()} 
      </div>
         {openCheck.name && <NameCheck user={user} setOpenCheck={setOpenCheck} setUser={setUser} />}
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
    </div>
  );
}

export default CheckList;
