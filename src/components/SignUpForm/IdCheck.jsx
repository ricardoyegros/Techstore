import React from 'react'
import {  useForm } from 'react-hook-form';

function IdCheck({ user,setUser,setOpenCheck , openCheck,setErrorMsg,errorMsg }) {


/* hook useForm */
 const { register, formState: { errors }, handleSubmit } = useForm();

 const captureCredentials = (idData) =>{
      setOpenCheck({...openCheck,identification:!openCheck.identification})
      setUser({...user,["typeIdentification"]:idData.typeIdentification,["identification"]:(idData.identification).toString()});
 };

 const handleInput = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
      if(errors){
         setErrorMsg({...errorMsg,[e.target.name]:errors})
      }
 };


  return (
    <>
      <form onSubmit={handleSubmit(captureCredentials)} onChange={handleInput} className='flex  gap-3 my-3 '>
        <select  {...register("typeIdentification", 
           { required: {
            value:true,
            message:"Seleccione uno"
           }
           })}  className='lg:w-[18%]'
        >
            <option defaultValue="Elegir" disabled>Elegir</option>
            <option value="DNI" >DNI</option>
            <option value="C.I." >C.I.</option>
        </select>
       
    <input
           {...register("identification", 
           { required: {
            value:true,
            message:"Ingrese un numero de Id"
           },
           pattern:{
            value:/^[0-9]*$/,
            message:"Solo numeros"
            },
            minLength:{
                value:4,
                message:"Debe contener mas de 4 digitos"
            }
            
           })} 
           aria-invalid ={errors.identification ? "true" : "false"}
           className='p-2 border rounded-md'
         
         />
         
      
         <button type='submit' className='bg-secondary rounded-lg lg:p-2 xs:p-4 w-32 '>Guardar</button>
    </form>
    {errors.typeIdentification?.message && <p className="text-error text-sm">{errors.typeIdentification.message}</p>}
    {errors.typeIdentification?.message && <p className="text-error text-sm">{errors.identification.message}</p>}{errors.identification?.message && <p className="text-error text-sm">{errors.identification.message}</p>}
    </>
  
  )
};

export default IdCheck;