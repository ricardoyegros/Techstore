import React, { useRef } from 'react';

function SignInForm({setUser}) {

const nameUserRef = useRef();
const passwordUserRef = useRef();

/* Funcion donde capturo credenciales de usuario */
const userCredentials = (e) =>{
  e.preventDefault();
  const email = nameUserRef.current.value;
  const password = passwordUserRef.current.value;
  console.log(email,password)
  if(password.length > 3){
    setUser({
      email,
      password
    })
  }
}


  return (
        <>
        <form onSubmit={userCredentials} className=' border min-w-[25rem] '>
        <div className='flex flex-col gap-6 w-full p-16'>
        <label htmlFor='userSignIn'>Email</label>
        <input className='p-2' id='userSignIn' ref={nameUserRef} type="email" autoFocus autoComplete='off'/>
        <label htmlFor='passSignIn'>Password</label>
        <input className='p-2' id='passSignIn' ref={passwordUserRef} type="password" autoFocus/>
        <button type='submit' className='bg-secondary rounded-lg p-2'>Sign In</button>
        </div>
        </form>
        </>
  )
}

export default SignInForm;