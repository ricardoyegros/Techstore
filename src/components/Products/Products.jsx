import React, { useState } from 'react';
import { LeftSideBar } from '../LeftSideBar/LeftSideBar';
import { RightSideBar } from '../RightSidebar/RightSideBar';

export const Products = () => {

    const [filter, setFilter] = useState({});

    return (
        <div className='flex flex-row justify-center w-full h-full -md:flex-col -md:items-center'>
            <LeftSideBar filter={filter} setFilter={setFilter} />
            <RightSideBar filter={filter} setFilter={setFilter} />
        </div>
    )
};