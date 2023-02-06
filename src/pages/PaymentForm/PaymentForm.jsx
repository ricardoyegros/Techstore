import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { fieldFormUtils } from "../../utils/fieldForm.utils";
import { inputField } from "../../utils/inputField.utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../schemas/contact.schema";
import Modal from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { paymentAction } from "../../redux/actions/paymentAction";
import { propsModal } from "../../utils/propsModal";

function PaymentForm() {
    const dispatch = useDispatch();
    const [formMessage, setFormMessage] = useState();
    const [modal, setModal] = useState(false);
    const [send, setSend] = useState(true);

    const cart = useSelector(state => state.shoppingCartReducer.cart);

    let form = { cart, userId: JSON.parse(sessionStorage.user).id };

    const handlePayment = e => {
        e.preventDefault();
        dispatch(paymentAction({ form, setModal }));
    };

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(contactSchema),
        mode: "onBlur",
        defaultValues: {
            userName: "",
            address: "",
            CP: "",
            phone: "",
            message: "",
        },
    });
    const { handleFormChange } = fieldFormUtils(
        formMessage,
        setFormMessage,
        modal,
        setModal
    );

    const formClass = "flex flex-col items-center mb-10";
    return (
        <div className={formClass}>
            <h1 className="text-primary font-bold text-[3rem] text-center mt-10 ">
                TechStore
            </h1>
            <h3 className="text-secondary text-lg text-center font-bold mt-5">
                Rellene sus datos para continuar con el envío
            </h3>

            <form
                onSubmit={handlePayment}
                className="mt-10 border rounded-lg xs:w-[20rem] md:w-[40rem] lg:w-[50rem]"
            >
                <div className="flex flex-col gap-6 w-full lg:p-16 md:p-12 sm:p-8 xs:p-4">
                    <label htmlFor="userName">¿Quién recibe?</label>
                    {inputField("userName", register, handleFormChange, errors)}
                    <label htmlFor="userAddress">Dirección</label>
                    {inputField("address", register, handleFormChange, errors)}
                    <label htmlFor="userCP">Codigo Postal</label>
                    {inputField("CP", register, handleFormChange, errors)}
                    <label htmlFor="userPhone">Teléfono</label>
                    {inputField("phone", register, handleFormChange, errors)}
                    <label htmlFor="userMessage">¿Desea dejar alguna indicación?</label>
                    {inputField("message", register, handleFormChange, errors)}


                    <button
                        type="submit"
                        className="bg-secondary rounded-lg lg:p-2 xs:p-4 hover:font-bold "
                    >
                        Ir a MercadoPago
                    </button>

                    {/* 
                    {
                        send ?
                            <button
                                type="submit"
                                className="bg-secondary rounded-lg lg:p-2 xs:p-4 hover:font-bold "
                            >
                                Ir a MercadoPago
                            </button> :
                            <button
                                type="submit"
                                className="bg-slate-300 rounded-lg lg:p-2 xs:p-4 hover:cursor-not-allowed "
                            >
                                Ir a MercadoPago
                            </button>
                    } */}

                </div>
            </form>
            {modal && (
                <Modal
                    props={propsModal('Éxito', 'Finalice su compra en la nueva pestaña', 'Volver al inicio', setModal)}
                />
            )}
        </div>
    );
}

export default PaymentForm;
