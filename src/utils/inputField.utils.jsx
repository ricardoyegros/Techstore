export function inputField(type, register, handleFormChange, errors) {
  const fieldClass = "p-2 border rounded-md";
  const errorClass = "text-error text-sm -my-4";
  let placeholder = "";
  let errorMessage = "";
  if (type == "name") {
    placeholder = "Ingresa tu nombre";
    errorMessage = "Debes ingresar tu nombre";
  }
  if (type == "lastName") {
    placeholder = "Ingresa tu apellido";
    errorMessage = "Debes ingresar tu apellido";
  }
  if (type == "mail") {
    placeholder = "Ingresa tu email";
    errorMessage = "Debes ingresar tu email";
  }
  if (type == "phone") {
    placeholder = "Ingresa tu teléfono";
    errorMessage = "Debes ingresar tu teléfono";
  }
  if (type == "message") {
    placeholder = "Ingresa tu mensaje";
    errorMessage = "Debes ingresar tu mensaje";
  }
  return (
    <>
      <input
        {...register(type, { required: true })}
        aria-invalid={errors[type] ? "true" : "false"}
        placeholder={placeholder}
        className={fieldClass}
        onChange={handleFormChange}
      />
      {errors[type]?.type === "required" && (
        <p className={errorClass} role="alert">
          {errorMessage}
        </p>
      )}
    </>
  );
}
