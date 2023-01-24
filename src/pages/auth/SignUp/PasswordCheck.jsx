import React from 'react'
import { useForm } from 'react-hook-form';


function PasswordCheck({ user,setUser,setOpenCheck }) {

    const { register, formState: { errors }, handleSubmit } = useForm();
   
    const captureCredentials = (passwordData) =>{
       let tempState = user;
       tempState.password = passwordData;
       setUser(tempState);
       setOpenCheck({mail:false,name:false,password:false})
    }
   
     return (
       <form onSubmit={handleSubmit(captureCredentials)} className='flex flex-col gap-3 my-3 '>
       
       <input
              {...register("password", { required: true })}
              type="password" 
              aria-invalid ={errors.mail ? "true" : "false"}
              placeholder="Entre 5 y 12 carácteres"
               className='p-2 border rounded-md'
            />
       <button type='submit' className='bg-secondary rounded-lg lg:p-2 xs:p-4 w-32 '>Guardar</button>
       </form>
     )
   }
   
   export default PasswordCheck;