import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { DetailCard } from '../components/DetailCard/DetailCard';
import LoginButton from '../components/Auth0/LoginButton';
import LogoutButton from '../components/Auth0/LogoutButton';

export const Details = () => {
    return (
        <Layout>
            <div>
            <LoginButton />
            <LogoutButton />
            </div>
            <div className='w-full h-fit flex justify-center items-center bg-[#F4F4F4] flex-col'>
                <div className='w-[90%]'>
                    <h4 className='font-bold text-primary p-3'>Inicio {'>'} Product:</h4>
                </div>
            </div>
            <div className='flex justify-center items-center w-full h-fit pt-4'>
                <div className='flex flex-col w-full justify-center items-center gap-2'>
                    <DetailCard />
                </div>
            </div>
        </Layout>
    )
}
