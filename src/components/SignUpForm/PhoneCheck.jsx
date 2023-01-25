import React from 'react'
import { useForm } from 'react-hook-form';

function PhoneCheck({ user,setUser,setOpenCheck , openCheck,setErrorMsg,errorMsg }) {


/* hook useForm */
 const { register, formState: { errors }, handleSubmit } = useForm();

 const captureCredentials = (phoneData) =>{
      setOpenCheck({...openCheck,phone:!openCheck.phone})
      setUser({...user,["phone"]:`+${phoneData.phone}`});
 };

 const handleInput = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
      if(errors){
         setErrorMsg({...errorMsg,[e.target.name]:errors})
      }
 };


  return (
    <form onSubmit={handleSubmit(captureCredentials)} onChange={handleInput} className='flex flex-col gap-3 my-3 '>
    <input
          {...register("phone", { 
            required: {
               value:true,
               message:"Ingrese su número"
            },
            pattern:{
                value:/^[0-9]*$/,
                message:"Solo numeros"
                },
                minLength:{
                    value:4,
                    message:"Debe contener mas de 4 digitos"
                }  })} 
           aria-invalid ={errors.phone ? "true" : "false"}
           className='p-2 border rounded-md'
           placeholder="Prefijo + número"

         />
         {errors.phone?.message && <p className="text-error text-sm">{errors.phone.message}</p>}
         <button type='submit' className='bg-secondary rounded-lg lg:p-2 xs:p-4 w-32 '>Guardar</button>
    </form>
  )
};

export default PhoneCheck;