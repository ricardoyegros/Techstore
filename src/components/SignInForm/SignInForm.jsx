import React, { useRef } from 'react';
/* Funcion para capturar usuario y contraseña */
import { captureUserCredentials } from '../../utils/capture.user.credentials';

function SignInForm({setUser}) {

const nameUserRef = useRef();
const passwordUserRef = useRef();

  return (
        <>
        <form onSubmit={(e) =>captureUserCredentials(e,setUser,nameUserRef,passwordUserRef)} className=' border rounded-lg min-w-[25rem] '>
        <div className='flex flex-col gap-6 w-full p-16'>
        <label htmlFor='userSignIn'>Email</label>
        <input className='p-2 border rounded-md' id='userSignIn' ref={nameUserRef} type="email" required autoFocus autoComplete='off'/>
        <label htmlFor='passSignIn'>Password</label>
        <input className='p-2 border rounded-md' id='passSignIn' ref={passwordUserRef} type="password" required autoFocus/>
        <button type='submit' className='bg-secondary rounded-lg p-2'>Sign In</button>
        </div>
        </form>
        </>
  )
}

export default SignInForm;