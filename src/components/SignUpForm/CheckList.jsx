import React from "react";

function CheckList() {
  return (
    <div className="flex flex-col gap-5 w-full ml-4">
        <div className="flex ">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresá tu email</p>
          <p className="text-sm">
            Solo recibirás notificaciones, nada de spam.
          </p>
          </div>
          <button className="bg-secondary rounded-lg p-2">Ingresar</button>
          </div>
        <div className="flex gap-5">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresá tu nombre completo</p>
          <p className="text-sm">
          Así sabremos como llamarte
          </p>
          </div>
          <button className="bg-secondary rounded-lg p-2">Ingresar</button>
          </div>
        <div className="flex gap-5">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Ingresá una contraseña</p>
          <p className="text-sm">
          Debe tener entre 5 a 12 carácteres y al menos una mayúscula.
          </p>
          </div>
          <button className="bg-secondary rounded-lg p-2">Ingresar</button>
          </div>
    </div>
  );
}

export default CheckList;
