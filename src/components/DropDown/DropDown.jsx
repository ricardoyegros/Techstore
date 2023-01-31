import React from 'react';
import { logoutUser } from '../../redux/actions/UserActions/UserActions';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../routes/public-routes';
import { useDispatch } from 'react-redux';

export const DropDown = ({ drop, setDrop }) => {
    const dispatch = useDispatch();
    const isLogged = sessionStorage.user
    const classForLi = 'bg-primary hover:bg-slate-400 p-2';
    return (
        <ul className={`${drop ? 'visible' : 'hidden'} absolute translate-y-10 translate-x-4 h-[50px] w-[120px]`}>
            <li className={classForLi}>{isLogged ? 'Ir al Panel' :( <Link to={PublicRoutes.SING_IN}>Iniciar Sesión</Link>)}</li>
            <li className={classForLi}>{isLogged ? (<button type='button' onClick={()=>dispatch(logoutUser())}>Cerrar Sesion</button>) : (<Link to={PublicRoutes.SING_UP}>Crear cuenta</Link>)}</li>
        </ul>
    )
};
