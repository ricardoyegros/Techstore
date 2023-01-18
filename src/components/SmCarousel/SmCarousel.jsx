import React from 'react'
import { CardCarousel } from '../CardCarousel/CardCarousel';

export const SmCarousel = ({ device }) => {

    const toRender = j => {
        let n = 3;
        if(j === 'Desktop') n = 3;
        if(j === 'Tablet-portrait') n = 2;
        if(j === 'Mobile-portrait' || j === 'Mobile-landscape') n = 1;
        let r = [];
        for (let i = 0; i < n; i++) {
            r.push(<CardCarousel />)
        }
        return r;
    }

    return (
        <div className='w-full h-fit flex justify-center items-center p-4'>
            <div className='w-[95%] flex justify-between gap-2'>
                {
                    toRender(device)
                }
            </div>
        </div>
    )
}
