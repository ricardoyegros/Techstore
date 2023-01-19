import React from 'react';

export const LeftSideBar = () => {

    const items = ['category1', 'category2', 'category3', 'category4', 'category5', 'category6', 'category7', 'category8',];
    const brands = ['brand1','brand2','brand3','brand4','brand5',];



    return (
        <div className='flex flex-col gap-2 justify-center items-center w-[30%] h-fit'>

            <div className='flex w-[80%] justify-between h-fit py-2 text-primary'>
                <h4 className='select-none font-extrabold'>Categorias</h4>
                <button className='hover:bg-details hover:rounded-lg px-1 text-gray1 font-bold'>Reiniciar</button>
            </div>

            <div className='h-1 w-[80%] bg-primary'></div>

            <div className='flex w-[80%] flex-col gap-4 justify-between h-fit py-2 text-primary'>
                {
                    items.map((e) => <div className='flex w-full items-center justify-center'>
                        <div className='flex w-full justify-between items-center gap-4'>
                            <label htmlFor={e} className='hover:cursor-pointer'>{e}</label>
                            <input type="checkbox" id={e} className='bg-details opacity-0 checked:opacity-100 w-6 h-6' />
                        </div>
                    </div>)
                }
            </div>

            <div className='flex w-[80%] justify-between h-fit py-2 text-primary'>
                <h4 className='font-extrabold select-none'>Marcas</h4>
                <button className='hover:bg-details hover:rounded-lg px-1 text-gray1 font-bold'>Reiniciar</button>
            </div>

            <div className='h-1 w-[80%] bg-primary'></div>

            <div className='flex w-[80%] flex-col gap-4 justify-between h-fit text-primary'>
                {
                    brands.map((e) => <div className='flex w-full items-center justify-center'>
                        <div className='flex w-full justify-between items-center gap-4'>
                            <label htmlFor={e} className='hover:cursor-pointer'>{e}</label>
                            <input type="checkbox" id={e} className='bg-details opacity-0 checked:opacity-100 w-6 h-6' />
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
}
