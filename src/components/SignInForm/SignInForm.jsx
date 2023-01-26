import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

function SignInForm() {
  /* State user */
  const [user, setUser] = useState({});
  /* useForm hook */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
/*  */
  let formRef = useRef();
/* submit funcion y  dispatch  */

  const captureUserCredentials = (userData) => {
    setUser(userData);
    let {mail , password} = userData;
    formRef.current.reset();
    
  };
/* OnChange */
  const handleChange = (e) =>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })

  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit(captureUserCredentials)}
        className=" border rounded-lg min-w-[27rem]"
        onChange={handleChange}
      >
        <div className="flex flex-col gap-6 w-full lg:p-16 md:p-12 sm:p-8 xs:p-4">
          <label htmlFor="userSignIn">Email</label>
          <input
            {...register("mail", { 
              required:{
                value:true,
                message:"Debe ingresar un email."
              },
              pattern:{
                value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message:"Debe ingresar un mail valido."
              }

            })}
            aria-invalid={errors.mail ? "true" : "false"}
            placeholder="Ingresa tu email"
            className="p-2 border rounded-md"
          />
          {errors.mail?.message && <p className="text-error text-sm -my-4">{errors.mail.message}</p>}
          <label htmlFor="passSignIn">Contraseña</label>
          <input
            {...register("password", { 
              required:{
                value:true,
                message:"Ingrese su contraseña"
              }
            })}
            type='password'
            aria-invalid={errors.password ? "true" : "false"}
            className="p-2 border rounded-md"
            placeholder="Ingresa tu contraseña"
          />
           {errors.password?.message && <p className="text-error text-sm -my-4">{errors.password.message}</p>}
          <button
            type="submit"
            className="bg-secondary rounded-lg lg:p-2 xs:p-4 "
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </>
  );
}

export default SignInForm;
