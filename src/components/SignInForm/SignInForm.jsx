import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { inputField } from "../../utils/inputField.utils";
import { signInSchema } from "../../schemas/signIn.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { fieldFormUtils } from "../../utils/fieldForm.utils";
import { userLogin } from "../../redux/actions/userLogin";
import { useDispatch } from "react-redux";

function SignInForm() {
  const [modal, setModal] = useState(false);
  /* State user */
  const [user, setUser] = useState();
  /* useForm hook */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const { saveMessage, handleFormChange } = fieldFormUtils( user, setUser , setModal );
 const dispatch = useDispatch();
const checkUser = () =>{
  console.log("hola");
dispatch(userLogin(user))
}
  
  return (
    <>
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
            onClick={checkUser}
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </>
  );
}

export default SignInForm;
