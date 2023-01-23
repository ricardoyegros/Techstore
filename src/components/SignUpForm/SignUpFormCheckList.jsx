import React from 'react';
import { UserLogo } from '../../assets/UserLogo/UserLogo';
import CheckList from './CheckList';


function SignUpFormCheckList({}) {




  return (
        <>
       <div className="flex flex-col items-center justify-center border rounded-lg lg:p-16 md:p-12 sm:p-8 xs:p-4">
       <UserLogo/>
        <p className="text-2xl">First we have check youtinfo</p>
        <p className="text-md">It's going to take just a few seconds</p>
        <div className='w-full my-7'>
        <p className='font-bold text-lg'>Your Data</p>
        </div>
        <CheckList/>
        </div>
        </>
  )
}

export default SignUpFormCheckList;