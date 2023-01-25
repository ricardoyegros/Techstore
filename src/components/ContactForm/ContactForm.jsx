import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { fieldFormUtils } from "../../utils/fieldForm.utils";
import { inputField } from "../../utils/inputField.utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../schemas/contact.schema";
import Modal from "../Modal/Modal";
function ContactForm() {
  const [formMessage, setFormMessage] = useState();
  const [modal, setModal] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      lastName: "",
      mail: "",
      phone: "",
      message: "",
    },
  });
  const { saveMessage, handleFormChange } = fieldFormUtils(
    formMessage,
    setFormMessage,
    modal,
    setModal
  );
  const title = "Mensaje enviado con éxito";
  const messageModal =
    "Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible";
  const buttonMessage = "Volver al Home";
  const formClass = "flex flex-col items-center mb-10";
  return (
    <div className={formClass}>
      <h1 className="text-primary font-bold text-[3rem] text-center mt-10 ">
        TechStore
      </h1>
      <h3 className="text-secondary text-lg text-center font-bold mt-5">
        Dejanos tu consulta y te responderemos a la brevedad
      </h3>

      <form
        onSubmit={handleSubmit(saveMessage)}
        className="mt-10 border rounded-lg xs:w-[20rem] md:w-[40rem] lg:w-[50rem]"
      >
        <div className="flex flex-col gap-6 w-full lg:p-16 md:p-12 sm:p-8 xs:p-4">
          <label htmlFor="userName">Nombre</label>
          {inputField("name", register, handleFormChange, errors)}
          <label htmlFor="userLastName">Apellido</label>
          {inputField("lastName", register, handleFormChange, errors)}
          <label htmlFor="userEmail">Email</label>
          {inputField("mail", register, handleFormChange, errors)}
          <label htmlFor="userPhone">Teléfono</label>
          {inputField("phone", register, handleFormChange, errors)}
          <label htmlFor="userMessage">Mensaje</label>
          {inputField("message", register, handleFormChange, errors)}
          <button
            type="submit"
            className="bg-secondary rounded-lg lg:p-2 xs:p-4 hover:font-bold"
          >
            Envía tu consulta
          </button>
        </div>
      </form>
      {modal && (
        <Modal
          title={title}
          messageModal={messageModal}
          buttonMessage={buttonMessage}
          setModal={setModal}
        />
      )}
    </div>
  );
}

export default ContactForm;
