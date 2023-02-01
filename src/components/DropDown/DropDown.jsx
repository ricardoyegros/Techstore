import React from 'react';
import { logoutUser } from '../../redux/actions/UserActions/UserActions';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../routes/public-routes';
import { useDispatch } from 'react-redux';
import { PrivateRoutes } from '../../routes/privates-routes/private-user-routes';

export const DropDown = ({ drop, setDrop }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogged = sessionStorage.user
    const classForLi = 'bg-primary hover:bg-slate-400 p-2';
    return (
        <ul className={`${drop ? 'visible' : 'hidden'} absolute translate-y-10 translate-x-4 h-[50px] w-[120px]`}>
            <li className={classForLi}>{isLogged ? (<Link to={`/${PrivateRoutes.USER}/${PrivateRoutes.DASHBOARD}`}>Ir a panel</Link>) :(<Link to={`/${PublicRoutes.SING_IN}`}>Iniciar Sesión</Link>)}</li>
            <li className={classForLi}>{isLogged ? (<button type='button' onClick={()=>{dispatch(logoutUser()); setDrop(false); navigate("/")}}>Cerrar Sesion</button>) : (<Link to={`/${PublicRoutes.SING_UP}`}>Crear cuenta</Link>)}</li>
        </ul>
    )
};
