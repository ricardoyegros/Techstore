import React from 'react';
import { LeftSideBar } from '../LeftSideBar/LeftSideBar';
import { RightSideBar } from '../RightSidebar/RightSideBar';

export const Products = () => {
    return (
        <div className='flex flex-row justify-center w-full h-full -md:flex-col -md:items-center'>
            <LeftSideBar />
            <RightSideBar />
        </div>
    )
};