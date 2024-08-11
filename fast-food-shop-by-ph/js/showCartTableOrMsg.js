import { getCartProductsFromLS } from "./getCartProductsFromLS.js";

export const showCartTableOrMsg = () => {
    const cartProducts = getCartProductsFromLS();
    if (!cartProducts.length) {
        document.querySelector("#cart .sec-header").style.display = "none";
        document.querySelector("#cart .cart-box").style.display = "none";
        document.querySelector("#cart .cart-items__btn-box").style.display = "none";
        document.querySelector("#cart .no-product-msg").style.display = "block";
    } else {
        document.querySelector("#cart .sec-header").style.display = "block";
        document.querySelector("#cart .cart-box").style.display = "block";
        document.querySelector("#cart .cart-items__btn-box").style.display = "block";
        document.querySelector("#cart .no-product-msg").style.display = "none";
    }
}