export const fieldsForChecker = {
  email: {
    message: "Ingrese un mailllllllll",
    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    patternMessage: "Debe ingresar un mail valido.",
    type: "text",
  },
  name: {
    message: "Ingrese su nombre",
    pattern: /^[a-zA-Z]+$/g,
    patternMessage: "Solo letras",
    type: "text",
  },
  password: {
    message: "Ingrese su contraseña",
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    patternMessage: "Al menos una mayuscula, un número y 8 carácteres mínimo.",
    type: "password",
  },
  identification: {
    message: "Ingrese un numero de Id",
    pattern: /^[0-9]*$/,
    patternMessage: "Solo numeros",
    type: "text",
  },
  address: {
    message: "Ingrese su calle",
    pattern: /^[a-zA-Z]+$/g,
    patternMessage: "Solo letras",
    type: "text",
  },
  contact: {
    message: "Ingrese su número",
    pattern: /^[0-9]*$/,
    patternMessage: "Solo numeros",
    type: "text",
  },
};
