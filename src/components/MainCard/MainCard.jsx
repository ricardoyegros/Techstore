import React, { useState } from 'react';
import FavLogo from '../../assets/Fav-logo.svg';
import FavNoLogo from '../../assets/FavNo-logo.svg';

export const MainCard = ({ text }) => {

    const [state, setState] = useState(false);

    return (
        <div className='flex flex-col w-[250px] h-[250px] items-center bg-transparent border-border border-2 rounded-3xl'>
            <div className='flex justify-center w-[90%]'>
                <img
                    src="https://images.fravega.com/f300/5ab6af9703136da67b83d8ffa568ecf0.jpg"
                    alt="loading..."
                    className="h-36 w-[90%] rounded-3xl select-none"
                />
                <button onClick={() => setState(!state)} className='absolute mt-4 ml-48 rounded-full p-1'>
                    {<img src={state ? FavLogo : FavNoLogo} alt="loading..." className='w-6 h-6 hover:w-8 hover:h-8 transition-all' />}
                </button>
            </div>
            <div className='w-[90%] h-full flex flex-col items-center text-primary'>
                <h4>{'Product ' + text}</h4>
                <h5>Price: {text + " $"}</h5>
            </div>
        </div>
    )
}
