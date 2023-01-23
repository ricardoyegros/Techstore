import React from 'react';
import UserLogo from '../../assets/User-logo.svg';
import HearthLogo from '../../assets/Hearth-logo.svg';
import CartLogo from '../../assets/Cart-logo.svg';

export const Navbar = () => {
    return (
        <nav className='bg-primary w-full h-20 flex justify-center items-center'>
            <div className='w-[90%] flex justify-between items-center text-text2'>
                <div className='flex justify-center items-center gap-8 -sm:w-full -sm:justify-center'>
                    <h2 className='text-4xl font-bold hover:cursor-pointer -sm:hidden'>TechStore</h2>
                    <form className='flex w-fit -sm:w-full'>
                        <input type="text" className='rounded-l-lg h-10 w-72 text-text1 focus:border-none outline-none -sm:w-60 p-3' />
                        <button type="submit" className='bg-secondary text-text2 rounded-r-lg px-5 -sm:px-3 hover:scale-105' >Buscar</button>
                    </form>
                </div>
                <div className='flex justify-center items-center gap-5 -sm:hidden'>
                    <div className='flex justify-center items-center hover:cursor-pointer hover:scale-105'>
                        <img src={UserLogo} alt="loading..." className='w-8 h-8 -sm:hidden' />
                        <h4 className='-lg:hidden'>Cuenta</h4>
                    </div>
                    <div className='flex justify-center items-center gap-1 hover:cursor-pointer hover:scale-105'>
                        <img src={HearthLogo} alt="loading..." className='w-6 h-6 -sm:hidden' />
                        <h4 className='-lg:hidden'>Favoritos</h4>
                    </div>
                    <div className='flex justify-center items-center gap-1 hover:cursor-pointer hover:scale-105'>
                        <img src={CartLogo} alt="loading..." className='w-6 h-6 -sm:hidden' />
                        <h4 className='-lg:hidden'>Carrito</h4>
                    </div>
                </div>
            </div>
        </nav>
    )
}
