import * as yup from "yup";
const regexPhoneNumber = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const regexForNames = /^([^0-9_-]*)$/;
export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .matches(regexForNames, "El campo nombre no puede contener numeros")
    .required("Debes ingresar un nombre"),
  lastName: yup
    .string()
    .required("Debes ingresar un apellido")
    .matches(regexForNames, "El campo apellido no puede contener números"),
  mail: yup
    .string()
    .email("Debes ingresar un email válido")
    .required("Debes ingresar un email"),
  phone: yup
    .string().matches(regexPhoneNumber,"Debes ingresar un numero de télefono válido")
    .required("Debes ingresar un número de teléfono"),
  message: yup.string().required("Debes ingresar un mensaje").min(10,"El mensaje debe contener más de 10 carácteres"),
});