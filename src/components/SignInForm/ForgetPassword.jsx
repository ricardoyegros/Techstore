import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signInSchema } from "../../schemas/signIn.schema";
import { fieldFormUtils } from "../../utils/fieldForm.utils";
import { inputField } from "../../utils/inputField.utils";
import Layout from "../Layout/Layout";

function ForgetPassword() {
  /* State modal */
  const [openModal, setOpenModal] = useState(false);
  /* State user */
  const [email, setEmail] = useState();

 
  /* useForm hook */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm( useForm({
    resolver: yupResolver(signInSchema),
  }));
  const { saveMessage, handleFormChange } = fieldFormUtils(
    email,
    setEmail,
    setOpenModal
  );




  return (
    <Layout>
      <div className="flex justify-center py-12">
        <form onSubmit={handleSubmit(saveMessage)}  className="border rounded-lg lg:w-2/5 md:w-2/3 xs:w-1/2">
          <div className="flex flex-col gap-9 w-full lg:p-16 md:p-12 sm:p-8 xs:p-4">
            <label>Ingrese su email</label>
            {inputField("email", register, handleFormChange, errors)}
            {console.log(errors)}
            <button  className="bg-secondary rounded-lg lg:p-2 xs:p-4">
              Recuperar contraseña
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default ForgetPassword;
