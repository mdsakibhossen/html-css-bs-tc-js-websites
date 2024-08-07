import { checkout } from "./checkout.js";
import { getProductsFromLS } from "./getProductsFromLS.js";
import { showToastMsg } from "./showToastMsg.js";
import { toggleCartTable } from "./toggleCartTable.js";
import { updateCartIconNumber } from './updateCartIconNumber.js';

export const removeCartProductFromLS = (id) => {
    const cartProductsFromLS = getProductsFromLS();
    const newCartProductsLS = cartProductsFromLS.filter(item=>item.id!==id)
    localStorage.setItem("cartProducts", JSON.stringify(newCartProductsLS));
    
    let cart = document.querySelector(`#cart${id}`);
    if (cart) {
        cart.remove();
    }
    // Update Cart Number When Product is Removed From Cart
    updateCartIconNumber();

    // Update Checkout
    checkout();

    // Show Message
    showToastMsg("Removed Successfully!!!");

    // Toggle Cart Table
    toggleCartTable();
}