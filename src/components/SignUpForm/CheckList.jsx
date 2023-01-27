import React, { useState } from "react";
import CheckLogo from "../../assets/CheckLogo/CheckLogo";
import Modal from "../Modal/Modal";
import { registerUser } from "../../redux/actions/UserRegister/putUserRegister";
import { useDispatch , useSelector } from "react-redux";
import fieldsForCheckList from "./fieldsForCheckList";
import Checker from "./FormChecker";

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
    identification:false,
    address:false,
    contact:false
  });
  
  /* Props del modal */
  const propsModal = {
    title:"¡Éxito!",
    messageModal:"Te has registrado satisfactoriamente",
    buttonMessage: "Volver al inicio",
    setModal:setOpenModal,
  };
  /* Funcion que renderiza checkbutton */
  const checkButton = (type,setState,state) =>{
    if (user &&  user[type] && (!errorMsg[type] || !errorMsg[type].length)) {
      return (<button onClick={()=>setState({...state,[type]:!state[type]})} type="button" className=" flex items-center  justify-center bg-secondary rounded-lg p-1">
      Editar<CheckLogo />
      </button>)
    } else {
      return (<button onClick={()=>setState({...state,[type]:!state[type]})} className="bg-secondary rounded-lg p-2">{state[type] ? "Cerrar" : "Ingresar"}</button>)
    }
  };

  /* submit */
  const dispatch = useDispatch()
  const status = useSelector((state)=>state.userRegisterReducer.status);

  const onRegisterUser = () =>{
     dispatch(registerUser(user));
     if(status == 201){
       setOpenModal(!openModal) 
     }

  }

  const saveAndContinueButton = () =>{
    let userLength = Object.entries(user);
    if(userLength.length === 8){
     return(<button onClick={onRegisterUser} className="bg-secondary rounded-lg p-2 my-4" type="button">Guardar y continuar</button>)
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full ml-4">
      {openModal && <Modal {...propsModal}/>}
      <div className="flex flex-col">
        {fieldsForCheckList("email", checkButton, setOpenCheck, openCheck)}
        {openCheck.email && <Checker type={"email"} errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser} />}
      </div>
      {fieldsForCheckList("name", checkButton, setOpenCheck, openCheck)}
         {openCheck.name && <Checker type={"name"} errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser} />}
      {fieldsForCheckList("password", checkButton, setOpenCheck, openCheck)}
      {openCheck.password && <Checker type={"password"} errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser}  />}
       {fieldsForCheckList("identification", checkButton, setOpenCheck, openCheck)}
  {openCheck.identification && <Checker type={"identification"} errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser}/>}
    {fieldsForCheckList("address", checkButton, setOpenCheck, openCheck)}
     {openCheck.address && <Checker type={"address"} errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser} />}
       {fieldsForCheckList("contact", checkButton, setOpenCheck, openCheck)}
       {openCheck.contact && <Checker type={"contact"} errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} openCheck={openCheck} setOpenCheck={setOpenCheck} setUser={setUser} />}
       {saveAndContinueButton()}
    </div>
  );
}

export default CheckList;
