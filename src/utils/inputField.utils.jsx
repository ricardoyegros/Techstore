export function inputField(type, register, handleFormChange, errors) {
  const fieldClass = "p-2 border rounded-md";
  const errorClass = "text-error text-sm -my-4";
  let placeholder = "";
  let errorMessage = "";
  if (type == "name") {
    placeholder = "Ingresa tu nombre";
  }
  if (type == "lastName") {
    placeholder = "Ingresa tu apellido";
  }
  if (type == "mail") {
    placeholder = "Ingresa tu email";
  }
  if (type == "phone") {
    placeholder = "Ingresa tu teléfono";
  }
  if (type == "message") {
    placeholder = "Ingresa tu mensaje";
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
      {(
        <p className={errorClass}>
          {errors[type]?.message}
        </p>
      )}
    </>
  );
}
