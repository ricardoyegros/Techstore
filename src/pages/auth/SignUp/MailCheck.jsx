import React, { useRef } from 'react'
import { set, useForm } from 'react-hook-form';

function MailCheck({ user,setUser,setOpenCheck , openCheck,setErrorMsg,errorMsg }) {


/* hook useForm */
 const { register, formState: { errors }, handleSubmit } = useForm();

 const captureCredentials = (mailData) =>{
   if(!errors.email){
      setOpenCheck({...openCheck,mail:!openCheck.mail})
      setUser(mailData);
   }
 };

 const handleInput = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
      if(errors){
         setErrorMsg({...errorMsg,[e.target.name]:errors})
      }
 };
 console.log(user,"user")

  return (
    <form onSubmit={handleSubmit(captureCredentials)} onChange={handleInput} className='flex flex-col gap-3 my-3 '>
    <input
           {...register("email", 
           { required: {
            value:true,
            message:"Ingrese un mail"
           },
           pattern:{
            value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message:"Debe ingresar un mail valido."
          }
           })} 
           aria-invalid ={errors.email ? "true" : "false"}
           className='p-2 border rounded-md'
           value={user.email}
           onChange={handleInput}

         />
         {errors.email?.message && <p className="text-error text-sm">{errors.email.message}</p>}
         <button type='submit' className='bg-secondary rounded-lg lg:p-2 xs:p-4 w-32 '>Guardar</button>
    </form>
  )
};

export default MailCheck;