import React from 'react';
import { StarRating } from '../StarsRating/StarRating';

export const DetailCard = () => {
    return (
        <div className='flex w-[90%] h-fit justify-center gap-4'>
            {/* Div contenedor padre */}
            <div className='flex w-[50%] h-fit items-center flex-col gap-4'>
                {/* Este div tiene las Imagenes */}

                <img className='w-[80%] rounded-2xl border-2 border-border' src="https://images.fravega.com/f300/5ab6af9703136da67b83d8ffa568ecf0.jpg" alt="Loading..." />

                <div className='flex w-[80%] justify-between gap-2'>
                    <img className='w-[48%] h-[30%] border-2 border-border rounded-2xl mb-4' src="https://images.fravega.com/f300/5ab6af9703136da67b83d8ffa568ecf0.jpg" alt="Loading..." />
                    <img className='w-[48%] h-[30%] border-2 border-border rounded-2xl mb-4' src="https://images.fravega.com/f300/5ab6af9703136da67b83d8ffa568ecf0.jpg" alt="Loading..." />
                </div>
            </div>

            <div className='flex w-[50%] font-bold text-primary text-2xl'>
                <h2>Notebook</h2>
                <StarRating n={5}/>
                {/* Este div tiene el lado de la derecha */}
                
            </div>
        </div>
    )
}