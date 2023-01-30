import axios from "axios";
export const ACTIONS = {
    ADD_TO_CART : "ADD_TO_CART",
    REMOVE_ONE_FROM_CART : "REMOVE_ONE_FROM_CART",
    REMOVE_ONE_ALL_FROM_CART : "REMOVE_ONE_ALL_FROM_CART",
    CLEAR_CART : "CLEAR_CART",
    SHIPPING_DATA : "SHIPPING_DATA"
};

export function addToCart (name) {
    return async function (dispatch){
        try {
            let product = await axios.get(
                `http://localhost:3001/products/carts?name=${name}`
            );
            let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
            let duplicate = cart.filter(p => p.name === product.data.name)
            if(duplicate.length === 0) {
                let productToAdd = {
                    ...product.data,
                    quantity : 1
                }
                cart.push(productToAdd)
            }else {
                cart = cart.map((item) => item.name === product.data.name ? {...item , quantity: item.quantity + 1}: item)
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            dispatch({
                type: ACTIONS.ADD_TO_CART,
                payload: cart,
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export function removeOneFromCart (id) {
    return async function (dispatch){
        try {
            let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
            let duplicate = cart.filter(p => p.id === id)
            if(duplicate.length > 0) {
                cart = cart.map((item) => item.id === id ? {...item , quantity: item.quantity - 1}: item)
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            dispatch({
                type: ACTIONS.REMOVE_ONE_FROM_CART,
                payload: cart,
            });  
        } catch (error) {
            console.log(error);
        }
    }
};

export function removeItemFromCart (id) {
    return async function (dispatch){
        try {
            let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
            let duplicate = cart.filter(p => p.id === id)
            if(duplicate.length > 0) {
                cart = cart.filter(item => item.id !== id)
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            dispatch({
                type: ACTIONS.REMOVE_ONE_ALL_FROM_CART,
                payload: cart
            });  
        } catch (error) {
            console.log(error);
        }
    }
};