import React from 'react'
import { useForm } from 'react-hook-form';

function MailCheck({ user,setUser,setOpenCheck , openCheck,setErrorMsg,errorMsg }) {


/* hook useForm */
 const { register, formState: { errors }, handleSubmit } = useForm();
/* Onsubmit function */
 const captureCredentials = (mailData) =>{
      setOpenCheck({...openCheck,email:!openCheck.email})
      setUser({...user,["email"]:mailData.email});
      
 };
/* Onchange function */
 const handleInput = (e) => {
    setUser({...user,[e.target.name]:mailData.email})
      if(errors){
         setErrorMsg({...errorMsg,[e.target.name]:errors})
      }
 };


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
           
          

         />
         {errors.email?.message && <p className="text-error text-sm">{errors.email.message}</p>}
         <button type='submit' className='bg-secondary rounded-lg lg:p-2 xs:p-4 w-32 '>Guardar</button>
    </form>
  )
};

export default MailCheck;