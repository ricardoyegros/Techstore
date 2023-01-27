export default function fieldsForCheckList(type, checkButton,setOpenCheck, openCheck ) {
  const textForFields = {
    email: ["Ingresá tu email!!!", "Solo recibirás notificaciones, nada de spam"],
    name: ["Ingresá tu nombre completo!!!", "Así sabremos como llamarte"],
    password: ["Ingresá una contraseña", "Para proteger tu cuenta"],
    identification: [
      "Ingresa tu número de identificación.",
      "Te lo guardamos para rellenar datos de facturacion en caso de compra",
    ],
    address: ["Dirección", "Asi sabremos donde mandarte tus productos"],
    contact: ["Número de contacto", "Solo te llamaremos si es necesario"],
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-full ">
        <p className="text-lg">{textForFields[type][0]}</p>
        <p className="text-sm">{textForFields[type][1]}</p>
      </div>
      {checkButton(type, setOpenCheck, openCheck)}
    </div>
  );
}
