export function inputField(type, register, handleFormChange, errors) {
  const fieldClass = "p-2 border rounded-md";
  const errorClass = "text-error text-sm -my-4";
  let placeholder = "";
  if (type == "name") {
    placeholder = "Ingresa tu nombre";
  }
  if (type == "lastName") {
    placeholder = "Ingresa tu apellido";
  }
  if (type == "mail" || "email") {
    placeholder = "Ingresa tu email";
  }
  if (type == "phone") {
    placeholder = "Ingresa tu teléfono";
  }
  if (type == "message") {
    placeholder = "Ingresa tu mensaje";
  }
  if(type == "password"){
    placeholder = "Ingresa tu password"
  }
  return (
    <>
      <input
        {...register(type, { required: true })}
        aria-invalid={errors[type] ? "true" : "false"}
        placeholder={placeholder}
        className={fieldClass}
        onChange={handleFormChange}
        type={type == "password" ? "password" : ""}
      />
      {(
        <p className={errorClass}>
          {errors[type]?.message}
        </p>
      )}
    </>
  );
}
