import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { inputField } from "../../utils/inputField.utils";
import { signInSchema } from "../../schemas/signIn.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleLogin } from "@react-oauth/google";
import { fieldFormUtils } from "../../utils/fieldForm.utils";
import { userLogin } from "../../redux/actions/UserActions/UserActions";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import ModalError from "../Modal/ModalError";
import jwt_decode from "jwt-decode";
import { registerUser } from "../../redux/actions/UserActions/UserActions";

function SignInForm() {
  /* State modal */
  const [openModal, setOpenModal] = useState(false);
  /* State user */
  const [user, setUser] = useState();

  const [error, setError] = useState(false);
  /* useForm hook */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const { saveMessage, handleFormChange } = fieldFormUtils(
    user,
    setUser

  );

  /* dispatch redux */
  const dispatch = useDispatch();
  const dispatchUser = () => {
    dispatch(userLogin(user, openModal, setOpenModal, error, setError));
  };

  /* Props del modal */
  const propsModal = {
    title: "Has iniciado sesión",
    messageModal: " ",
    buttonMessage: "Volver al inicio",
    setModal: setOpenModal,
  };
  const propsModalError = {
    title: "Error al iniciar sesión",
    messageModal: "Revisa tus datos ingresados",
    buttonMessage: "Cerrar",
    setErrorModal:setError,
  };

  return (
    <>
      {error && <ModalError {...propsModalError} />}
      {openModal && <Modal {...propsModal} />} 
      <form
        onSubmit={handleSubmit(saveMessage)}
        className=" border rounded-lg min-w-[27rem]"
      >
        <div className="flex flex-col gap-6 w-full lg:p-16 md:p-12 sm:p-8 xs:p-4">
          <label htmlFor="userSignIn">Email</label>
          {inputField("email", register, handleFormChange, errors)}
    
          <label htmlFor="passSignIn">Contraseña</label>
          {inputField("password", register, handleFormChange, errors)}
          <button
            className="bg-secondary rounded-lg lg:p-2 xs:p-4"
            onClick={dispatchUser}
          >
            Iniciar sesión
          </button>
          <span className="text-center">or</span>
          <div className="flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              /* Decodificador de respuesta de goole */
              let decoded = jwt_decode(credentialResponse.credential);
              /* -------------- */
              const userData = {
              name: decoded.given_name,
              lastName:decoded.family_name,
              email:decoded.email,
              password:decoded.sub
             }
              dispatch(registerUser(userData));
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          </div>
        </div>
      </form>
    </>
  );
}

export default SignInForm;
