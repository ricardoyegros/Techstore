import React from "react";
import { useForm } from "react-hook-form";

function DireccionCheck({
  user,
  setUser,
  setOpenCheck,
  openCheck,
  setErrorMsg,
  errorMsg,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const captureCredentials = (addressData) => {
    setUser({ ...user,["street"]: addressData.street,["number"]:addressData.number});
    setOpenCheck({ ...openCheck, adress: !openCheck.adress });
  };

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (errors) {
      setErrorMsg({ ...errorMsg, [e.target.name]: errors });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(captureCredentials)}
      onChange={handleInput}
      className="flex flex-col gap-3 my-3 "
    >
      <input
        {...register("street", {
          required: {
            value: true,
            message: "Ingrese su calle",
          },
          pattern: {
            value: /^[a-zA-Z]+$/g,
            message: "Solo letras",
          },
        })}
        aria-invalid={errors.street ? "true" : "false"}
        placeholder="Calle"
        className="p-2 border rounded-md"
      />
      <input
        {...register("number", {
          required: {
            value: true,
            message: "Ingrese su número",
          },
          pattern: {
            value: /^[0-9]*$/,
            message: "Solo numeros",
          },
        })}
        aria-invalid={errors.number ? "true" : "false"}
        placeholder="Número"
        className="p-2 border rounded-md"
      />
      <button
        type="submit"
        className="bg-secondary rounded-lg lg:p-2 xs:p-4 w-32 "
      >
        Guardar
      </button>
      {errors.street?.message && (
        <p className="text-error text-sm">{errors.street.message}</p>
      )}
      {errors.number?.message && (
        <p className="text-error text-sm">{errors.number.message}</p>
      )}
    </form>
  );
}

export default DireccionCheck;
