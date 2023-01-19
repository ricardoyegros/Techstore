import React from 'react';
import { LeftSideBar } from '../LeftSideBar/LeftSideBar';
import { RightSideBar } from '../RightSidebar/RightSideBar';

export const RefactSideBar = () => {
    return (
        <div className='flex flex-row justify-center w-full h-full'>
            <LeftSideBar />
            <RightSideBar />
        </div>
    )
};