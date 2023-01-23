import React from 'react';
import { UserLogo } from '../../assets/UserLogo/UserLogo';
import CheckList from './CheckList';


function SignUpFormCheckList({}) {

  return (
        <>
       <div className="flex flex-col items-center justify-center border rounded-lg lg:p-16 md:p-12 sm:p-8 xs:p-4">
       <UserLogo/>
        <p className="text-2xl">Primero vamos a validar tus datos</p>
        <p className="text-md">Solo te tomará unos minutos</p>
        <div className='w-full my-7'>
        <p className='font-bold text-lg'>Tus datos</p>
        </div>
        <CheckList/>
        </div>
        </>
  )
}

export default SignUpFormCheckList;