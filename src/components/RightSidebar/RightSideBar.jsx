import React from 'react';
import { brands, items } from '../LeftSideBar/LeftSideBar';
import { MainCard } from '../MainCard/MainCard';
export const RightSideBar = () => {

  const toRender = n => {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(<MainCard text={i} />)
    }
    return result;
  }
  const classForSelects = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-60 ';
  return (
    <div className='w-[70%] h-full  '>
                <div className='lg:hidden flex gap-5 justify-center m-5'>
                <select className={classForSelects}>
                    <option  disabled>Categorias</option>
                    {items.map((category) => (<option>{category}</option>))}
                </select>
                <select className={classForSelects}>
                  <option disabled>Marcas</option>
                  {brands.map((brands) => (<option>{brands}</option>))}
                </select>
            </div>
      <div className='flex flex-row justify-center flex-wrap gap-8'>
        {toRender(9)}
      </div>
    </div>
  )
}
