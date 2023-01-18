import React from 'react'
import { CardCarousel } from '../CardCarousel/CardCarousel';

export const SmCarousel = () => {

    const toRender = n => {
        let r = [];
        for (let i = 0; i < n ; i++) {
            r.push(<CardCarousel/>)
        }
        return r;
    }

  return (
    <div className='w-full h-fit flex justify-center items-center p-4'>
        <div className='w-5/6 flex justify-between'>
        {
            toRender(3)
        }
        </div>
    </div>
  )
}
