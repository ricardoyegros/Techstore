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
    email: false ,
    name: false ,
    password: false,
    id:false,
    address:false,
    phone:false
  });
  
  /* Props del modal */
  const propsModal = {
    title:"¡Éxito!",
    messageModal:"Te has registrado satisfactoriamente",
    buttonMessage: "Volver al inicio",
    setModal:setOpenModal,
  };
  
  const checkButton = (type,setState,state) =>{
    if (user && type === "address" ?(user.street): user[type] && (!errorMsg[type] || !errorMsg[type].length)) {
      return (<button onClick={()=>setState({...state,[type]:!state[type]})} type="button" className=" flex items-center  justify-center bg-secondary rounded-lg p-1">
      Editar<CheckLogo />
      </button>)
    } else {
      return (<button onClick={()=>setState({...state,[type]:!state[type]})} className="bg-secondary rounded-lg p-2">{state[type] ? "Cerrar" : "Ingresar"}</button>)
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
          {checkButton("email",setOpenCheck,openCheck)}
        </div>
        {openCheck.email && <MailCheck errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser} />}
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresá tu nombre completo</p>
          <p className="text-sm">Así sabremos como llamarte</p>
        </div>
         {checkButton("name",setOpenCheck,openCheck)} 
      </div>
         {openCheck.name && <NameCheck  errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser} />}
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresá una contraseña</p>
          <p className="text-sm">
            Para proteger tu cuenta
          </p>
        </div>
       {checkButton("password",setOpenCheck,openCheck)}
      </div>
      {openCheck.password && <PasswordCheck  errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser}  />}
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresa tu número de identificación.</p>
          <p className="text-sm">
          Te lo guardamos para rellenar datos de facturacion en caso de compra
          </p>
        </div>
       {checkButton("id",setOpenCheck,openCheck)}
       </div>
  {openCheck.id && <IdCheck  errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser}/>}
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Dirección</p>
          <p className="text-sm">
          Asi sabremos donde mandarte tus productos
          </p>
        </div>
       {checkButton("address",setOpenCheck,openCheck)}
    </div>
     {openCheck.address && <DireccionCheck errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser} />}
       <div className="flex items-center justify-center">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Número de contacto</p>
          <p className="text-sm">
           Solo te llamaremos si es necesario
          </p>
        </div>
        {checkButton("phone",setOpenCheck,openCheck)}
       </div>
       {openCheck.phone && <PhoneCheck errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser} />}
       {saveAndContinueButton()}
    </div>
  );
}

export default CheckList;
