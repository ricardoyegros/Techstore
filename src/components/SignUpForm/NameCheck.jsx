import React from 'react'
import { useForm } from 'react-hook-form';

function NameCheck({ user,setUser, setOpenCheck , openCheck,setErrorMsg,errorMsg }) {

 const { register, formState: { errors }, handleSubmit } = useForm();

 const captureCredentials = (nameData) =>{
   console.log(nameData.name)
    setUser({...user,["name"]:nameData.name,["lastname"]:nameData.lastname});
    setOpenCheck({...openCheck,name:!openCheck.name})
 };

 const handleInput = (e) => {
   setUser({...user,[e.target.name]:e.target.value})
     if(errors){
        setErrorMsg({...errorMsg,[e.target.name]:errors})
     }
};
 console.log()

  return (
    <form onSubmit={handleSubmit(captureCredentials)} onChange={handleInput} className='flex flex-col gap-3 my-3 '>
    
    <input
           {...register("name", { 
            required: {
               value:true,
               message:"Ingrese su nombre"
            },
            pattern:{
               value:/^[a-zA-Z]+$/g,
               message:"Solo letras"
            }
          })} 
           aria-invalid ={errors.name ? "true" : "false"}
           placeholder="Nombre"
            className='p-2 border rounded-md'
         />
    <input
           {...register("lastname", { 
            required: {
               value:true,
               message:"Ingrese su apellido"
            },
            pattern:{
               value:/^[a-zA-Z]+$/g,
               message:"Solo letras"
            }  })} 
           aria-invalid ={errors.lastname ? "true" : "false"}
           placeholder="Apellido"
            className='p-2 border rounded-md'
         />
           {errors.name?.message && <p className="text-error text-sm">{errors.name.message}</p>}
           {errors.lastname?.message && <p className="text-error text-sm">{errors.lastname.message}</p>}
    <button type='submit' className='bg-secondary rounded-lg lg:p-2 xs:p-4 w-32 '>Guardar</button>
    </form>
  )
}

export default NameCheck;