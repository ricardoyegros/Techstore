import React from 'react'
import { useForm } from 'react-hook-form';

function NameCheck({ user,setUser,setOpenCheck }) {

 const { register, formState: { errors }, handleSubmit } = useForm();

 const captureCredentials = (nameData) =>{
    let tempState = user;
    tempState.name = nameData;
    setUser(tempState);
    setOpenCheck({mail:false,name:false,password:false})
 };


 

  return (
    <form onSubmit={handleSubmit(captureCredentials)} className='flex flex-col gap-3 my-3 '>
    
    <input
           {...register("name", { required: true })} 
           aria-invalid ={errors.mail ? "true" : "false"}
           placeholder="Nombre"
            className='p-2 border rounded-md'
         />
    <input
           {...register("lastname", { required: true })} 
           aria-invalid ={errors.mail ? "true" : "false"}
           placeholder="Apellido"
            className='p-2 border rounded-md'
         />
         
    <button type='submit' className='bg-secondary rounded-lg lg:p-2 xs:p-4 w-32 '>Guardar</button>
    </form>
  )
}

export default NameCheck;