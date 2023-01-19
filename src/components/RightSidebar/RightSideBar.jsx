import React from 'react';
import { MainCard } from '../MainCard/MainCard';
export const RightSideBar = () => {

  const toRender = n => {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(<MainCard text={i} />)
    }
    return result;
  }

  return (
    <div className='w-[70%] h-full  '>
      <div className='flex flex-row justify-center flex-wrap gap-8'>
        {toRender(9)}
      </div>
    </div>
  )
}
