import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/actions/getAllProducts';
import { LeftSideBar } from '../LeftSideBar/LeftSideBar';
import { RightSideBar } from '../RightSidebar/RightSideBar';

export const Products = () => {
    const [filter, setFilter] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts(filter));
      }, [filter]);
    const handleCheck = e => {
        e.preventDefault();
        const {name, value} = e.target
            setFilter({
                ...filter,
                [name]: value,
                page: 1
            });
        console.log(filter)
      };
    return (
        <div className='flex flex-row justify-center w-full h-full -md:flex-col -md:items-center'>
            <LeftSideBar filter={filter} setFilter={setFilter} handleCheck={handleCheck} />
            <RightSideBar filter={filter} setFilter={setFilter} handleCheck={handleCheck}/>
        </div>
    )
};