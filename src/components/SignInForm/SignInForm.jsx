import React from 'react';
import { useForm } from 'react-hook-form';


function SignInForm({setUser}) {

  const { register, formState: { errors }, handleSubmit } = useForm();

const captureUserCredentials = (userData) =>{
  setUser(userData);
};




  return (
        <>
        <form onSubmit={handleSubmit(captureUserCredentials)} className=' border rounded-lg min-w-[25rem] '>
        <div className='flex flex-col gap-6 w-full lg:p-16 md:p-12 sm:p-8 xs:p-4'>
        <label htmlFor='userSignIn'>Email</label>
        <input
           {...register("mail", { required: true })} 
           aria-invalid ={errors.mail ? "true" : "false"}
            placeholder="Enter a email"
            className='p-2 border rounded-md'
         />
         {errors.mail?.type === 'required' && <p className='text-error text-sm -my-4' role="alert">Mail is required</p>}
        <label htmlFor='passSignIn'>Password</label>
        <input 
        {...register("password",{required:true})}
        aria-invalid ={errors.password ? "true" : "false"}
        className='p-2 border rounded-md'
        placeholder="Enter your password"/>
          {errors.password?.type === 'required' && <p className='text-error text-sm -my-4' role="alert">Password is required</p>}
        <button type='submit' className='bg-secondary rounded-lg lg:p-2 xs:p-4 '>Sign In</button>
        </div>
        </form>
        </>
  )
}

export default SignInForm;