import React from 'react'

export const Pagination = ({ pages, filter, setFilter }) => {

    const handleClick = e => {
        e.preventDefault();
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        });
    };

    const toRender = n => {
        let r = [];
        for (let i = 0; i < n; i++) {
            r.push(<button onClick={handleClick} name='page' value={i + 1} className={`flex mt-6 mb-6 hover:font-bold items-center justify-center item-center ${filter.page == (i + 1) && 'font-bold border-2' } text-primary hover:border-2 p-2 rounded-full w-[34px] h-[34px]`}>
                {i + 1}
            </button>)
        }
        return r;
    };

    return (
        <div className='flex w-full justify-center gap-1 items-center pt-4'>
            {
                toRender(pages)
            }
        </div>
    )
}
