import React from 'react';

export const DropDown = ({ drop, setDrop }) => {
    const isLogged = JSON.parse(JSON.parse(sessionStorage.user)).id;
    const classForLi = 'bg-primary hover:bg-slate-400 p-2';
    return (
        <ul className={`${drop ? 'visible' : 'hidden'} absolute translate-y-10 translate-x-4 h-[50px] w-[120px]`}>
            <li className={classForLi}>{isLogged ? 'Ir al Panel' : 'Iniciar Sesion'}</li>
            <li className={classForLi}>{isLogged ? 'Cerrar Sesion' : 'Crear Cuenta'}</li>
        </ul>
    )
}
