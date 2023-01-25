import React from 'react'
import { useForm } from 'react-hook-form';

function NameCheck({ user,setUser, setOpenCheck , openCheck,setErrorMsg,errorMsg }) {

 const { register, formState: { errors }, handleSubmit } = useForm();

 const captureCredentials = (nameData) =>{
    setUser(nameData);
    setOpenCheck({...openCheck,name:!openCheck.name})
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
           {...register("name", { 
            required: {
               value:true,
               message:"Ingrese su mail"
            }, 
          })} 
           aria-invalid ={errors.name ? "true" : "false"}
           placeholder="Nombre"
            className='p-2 border rounded-md'
         />
    <input
           {...register("lastname", { required: true })} 
           aria-invalid ={errors.name ? "true" : "false"}
           placeholder="Apellido"
            className='p-2 border rounded-md'
         />
         
    <button type='submit' className='bg-secondary rounded-lg lg:p-2 xs:p-4 w-32 '>Guardar</button>
    </form>
  )
}

export default NameCheck;