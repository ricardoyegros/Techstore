import * as yup from "yup";

const regexForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const signInSchema = yup.object().shape({
  mail: yup
    .string()
    .email("Debes ingresar un email válido")
    .required("Debes ingresar un email"),
    password: yup
    .string()
    .required("Debes ingresar tu constraseña")
    .matches(regexForPassword, "Al menos 8 caracteres, una mayúscula y un número"),
});