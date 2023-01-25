import React, { useState } from "react";
import CheckLogo from "../../assets/CheckLogo/CheckLogo";
import DireccionCheck from "./DireccionCheck";
import IdCheck from "./IdCheck";
import MailCheck from "./MailCheck";
import NameCheck from "./NameCheck";
import PasswordCheck from "./PasswordCheck";
import PhoneCheck from "./PhoneCheck";
import Modal from "../Modal/Modal";

function CheckList() {
  
  
  /* Estados */
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState({});
  const [errorMsg, setErrorMsg] = useState({})
  /* Para abrir y cerrar los formularios */
  const [openCheck, setOpenCheck] = useState({
    mail: false ,
    name: false ,
    password: false,
    id:false,
    adress:false,
    phone:false
  });
  
  /* Props del modal */
  const propsModal = {
    title:"¡Éxito!",
    messageModal:"Te has registrado satisfactoriamente",
    buttonMessage: "Volver al inicio",
    setModal:setOpenModal,
  };
  
 


 /* Ver forma de refactorizar estas funciones */
  const mailCheckButton = () => {
    if (user && user.email && !errorMsg?.email) {
      return (<button onClick={()=>setOpenCheck({...openCheck,mail:!openCheck.mail})} type="button" className=" flex items-center  justify-center bg-secondary rounded-lg p-1">
      Editar<CheckLogo />
      </button>)
    } else {
      return <button onClick={()=>setOpenCheck({...openCheck,mail:!openCheck.mail})} className="bg-secondary rounded-lg p-2">{openCheck.mail ? "Cerrar" : "Ingresar"}</button>;
    }
  };

   const nameCheckButton = () => {
    if (user && user.name && user.lastname && !errorMsg?.name.length) {
      return (<button onClick={()=>setOpenCheck({...openCheck,name:!openCheck.name})} type="button" className=" flex items-center  justify-center bg-secondary rounded-lg p-1">
      Editar<CheckLogo />
      </button>)
    } else {
      return <button onClick={()=>setOpenCheck({...openCheck,name:!openCheck.name})}  className="bg-secondary rounded-lg p-2">{openCheck.name ? "Cerrar" : "Ingresar"}</button>;
    }
  };

  const passwordCheckButton = () => {
    if (user && user.password && !errorMsg?.password.length) {
      return (<button onClick={()=>setOpenCheck({...openCheck,mail:!openCheck.mail})} type="button" className=" flex items-center  justify-center bg-secondary rounded-lg p-1">
      Editar<CheckLogo />
      </button>)
    } else {
      return <button onClick={()=>setOpenCheck({...openCheck,password:!openCheck.password})} className="bg-secondary rounded-lg p-2">{openCheck.password ? "Cerrar" : "Ingresar"}</button>;
    }
  }; 
  const IdCheckButton = () => {
    if (user && user.id && !errorMsg.id.length) {
      return (<button onClick={()=>setOpenCheck({...openCheck,id:!openCheck.id})} type="button" className=" flex items-center  justify-center bg-secondary rounded-lg p-1">
      Editar<CheckLogo />
      </button>)
    } else {
      return <button onClick={()=>setOpenCheck({...openCheck,id:!openCheck.id})} className="bg-secondary rounded-lg p-2">{openCheck.id ? "Cerrar" : "Ingresar"}</button>;
    }
  }; 
  const adressCheckButton = () => {
    if (user && user.street && !errorMsg.street.length) {
      return (<button onClick={()=>setOpenCheck({...openCheck,adress:!openCheck.adress})} type="button" className=" flex items-center  justify-center bg-secondary rounded-lg p-1">
      Editar<CheckLogo />
      </button>)
    } else {
      return <button onClick={()=>setOpenCheck({...openCheck,adress:!openCheck.adress})} className="bg-secondary rounded-lg p-2">{openCheck.adress ? "Cerrar" : "Ingresar"}</button>;
    }
  }; 
  const phoneCheckButton = () => {
    if (user && user.phone && !errorMsg.phone.length) {
      return (<button onClick={()=>setOpenCheck({...openCheck,phone:!openCheck.phone})} type="button" className=" flex items-center  justify-center bg-secondary rounded-lg p-1">
      Editar<CheckLogo />
      </button>)
    } else {
      return <button onClick={()=>setOpenCheck({...openCheck,phone:!openCheck.phone})} className="bg-secondary rounded-lg p-2">{openCheck.phone ? "Cerrar" : "Ingresar"}</button>;
    }
  }; 



  const onRegisterUser = () =>{
      setOpenModal(!openModal);

  }

  const saveAndContinueButton = () =>{
    let userLength = Object.entries(user);
    if(userLength.length === 9){
     return(<button onClick={onRegisterUser} className="bg-secondary rounded-lg p-2 my-4" type="button">Guardar y continuar</button>)
    }
  };



  return (
    <div className="flex flex-col gap-5 w-full ml-4">
      {openModal && <Modal {...propsModal}/>}
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="flex flex-col w-full ">
            <p className="text-lg">Ingresá tu email</p>
            <p className="text-sm">
              Solo recibirás notificaciones, nada de spam
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
         {openCheck.name && <NameCheck  errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser} />}
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresá una contraseña</p>
          <p className="text-sm">
            Para proteger tu cuenta
          </p>
        </div>
       {passwordCheckButton()}
      </div>
      {openCheck.password && <PasswordCheck  errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser}  />}
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresa tu número de identificación.</p>
          <p className="text-sm">
          Te lo guardamos para rellenar datos de facturacion en caso de compra
          </p>
        </div>
       {IdCheckButton()}
       </div>
  {openCheck.id && <IdCheck  errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser}/>}
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Dirección</p>
          <p className="text-sm">
          Asi sabremos donde mandarte tus productos
          </p>
        </div>
       {adressCheckButton()}
    </div>
     {openCheck.adress && <DireccionCheck errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser} />}
       <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Número de contacto</p>
          <p className="text-sm">
           Solo te llamaremos si es necesario
          </p>
        </div>
        {phoneCheckButton()}
       </div>
       {openCheck.phone && <PhoneCheck errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser} />}
       {saveAndContinueButton()}
    </div>
  );
}

export default CheckList;
