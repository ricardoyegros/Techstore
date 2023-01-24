import React, { useRef } from 'react'
import { set, useForm } from 'react-hook-form';

function MailCheck({ user,setUser,setOpenCheck }) {



 const { register, formState: { errors }, handleSubmit } = useForm();

 const captureCredentials = (mailData) =>{
    let tempState = user;
    tempState.email = mailData.email;
    setOpenCheck({mail:false,name:false,password:false})
    setUser(tempState);
    
 };

 const handleInput = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
 }

  return (
    <form onSubmit={handleSubmit(captureCredentials)} className='flex flex-col gap-3 my-3 '>
    <input
           {...register("email", { required: true })} 
           aria-invalid ={errors.mail ? "true" : "false"}
           className='p-2 border rounded-md'
            value={user.email}
            onChange={handleInput}
         />
    <button type='submit' className='bg-secondary rounded-lg lg:p-2 xs:p-4 w-32 '>Guardar</button>
    </form>
  )
}

export default MailCheck;