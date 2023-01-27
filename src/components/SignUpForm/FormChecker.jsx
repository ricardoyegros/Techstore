import { useForm } from "react-hook-form";
import { fieldsForChecker } from "./fieldsForChecker";
export default function Checker({
  type,
  errorMsg,
  setErrorMsg,
  user,
  openCheck,
  setOpenCheck,
  setUser,
}) {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const captureCredentials = (data) => {
    if (type === "identification") {
      setOpenCheck({ ...openCheck, identification: !openCheck.identification });
      setUser({
        ...user,
        ["typeIdentification"]: data.typeIdentification,
        ["identification"]: data.identification.toString(),
      });
    }else if(type === "name") {
        setUser({...user,["name"]:data.name,["lastName"]:data.lastName});
        setOpenCheck({...openCheck,name:!openCheck.name})
    }else {
      setOpenCheck({ ...openCheck, [type]: !openCheck[type] });
      setUser({ ...user, [type]: data[type] });
    }
  };
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (errors) {
      setErrorMsg({ ...errorMsg, [e.target.name]: errors });
    }
  };
  return (
    <>
    <form
      onSubmit={handleSubmit(captureCredentials)}
      onChange={handleInput}
      className={type === "identification" ? "flex gap-3 my-3" : "flex flex-col gap-3 my-3"}
    >
      {type === "identification" && (
        <select
          {...register("typeIdentification", {
            required: {
              value: true,
              message: "Seleccione uno",
            },
          })}
          className="lg:w-[18%]"
        >
          <option defaultValue="Elegir" disabled>
            Elegir
          </option>
          <option value="DNI">DNI</option>
          <option value="C.I.">C.I.</option>
        </select>
      )}
        <input
          {...register(type, {
            required: {
              value: true,
              message: fieldsForChecker[type].message,
            },
            pattern: {
              value: fieldsForChecker[type].pattern,
              message: fieldsForChecker[type].patternMessage,
            },
          })}
          aria-invalid={errors[type] ? "true" : "false"}
          className="p-2 border rounded-md"
          type={fieldsForChecker[type].type}
        />
      {type === "name" && (<input
           {...register("lastName", { 
            required: {
               value:true,
               message:"Ingrese su apellido"
            },
            pattern:{
               value:/^[a-zA-Z]+$/g,
               message:"Solo letras"
            }  })} 
           aria-invalid ={errors.lastName ? "true" : "false"}
           placeholder="Apellido"
            className='p-2 border rounded-md'
         />)}
      {type !== "identification" && (errors[type]?.message && (
        <p className="text-error text-sm">{errors[type].message}</p>
      ))}
        {errors.lastName?.message && <p className="text-error text-sm">{errors.lastName.message}</p>}
      <button
        type="submit"
        className="bg-secondary rounded-lg lg:p-2 xs:p-4 w-32 "
      >
        Guardar
      </button>
    </form>
      {errors.typeIdentification?.message && <p className="text-error text-sm">{errors.identification.message}</p>}{errors.identification?.message && <p className="text-error text-sm">{errors.identification.message}</p>}
    </>
  );
}
