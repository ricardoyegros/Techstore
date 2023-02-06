import axios from "axios";

export const paymentAction = ({ form, setModal }) => () => {

    try {
        axios.post('http://localhost:3001/payments/cart', form)
            .then(r => {
                setModal(true);
                localStorage.removeItem('cart');
                return window.open(r.data.data.init_point);
            })
    } catch (error) {
        console.log(error.message);
    };
};