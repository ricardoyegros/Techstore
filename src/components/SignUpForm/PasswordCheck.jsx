import React from 'react'
import { useForm } from 'react-hook-form';


function PasswordCheck({ user,setUser,setOpenCheck , openCheck,setErrorMsg,errorMsg }) {

    const { register, formState: { errors }, handleSubmit } = useForm();
   
    const captureCredentials = (passwordData) =>{
       setUser({...user,["password"]:passwordData.password});
       setOpenCheck({...openCheck,password:!openCheck.password})
    };

    const handleInput = (e) => {
      setUser({...user,[e.target.name]:e.target.value})
        if(errors){
           setErrorMsg({...errorMsg,[e.target.name]:errors})
        }
      }
     return (
       <form onSubmit={handleSubmit(captureCredentials)} onChange={handleInput} className='flex flex-col gap-3 my-3 '>
       
       <input
              {...register("password", { 
                required: {
                  value:true,
                  message:"Ingrese su contraseña"
                },
                minLength:{
                  value:8,
                  message:"Al menos 8 caracteres"
                },
                pattern:{
                  value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message:"Al menos una mayuscula y un número."
                }
               })}
              type="password" 
              aria-invalid ={errors.password ? "true" : "false"}
              placeholder="Entre 5 y 12 carácteres"
               className='p-2 border rounded-md'
            />
       <button type='submit' className='bg-secondary rounded-lg lg:p-2 xs:p-4 w-32 '>Guardar</button>
       {errors.password?.message && <p className="text-error text-sm">{errors.password.message}</p>}
       </form>
     )
   }
   
   export default PasswordCheck;