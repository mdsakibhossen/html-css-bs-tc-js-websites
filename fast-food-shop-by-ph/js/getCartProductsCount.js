import { getCartProductsFromLS } from "./getCartProductsFromLS.js"

export const getCartProductsCount = ()=>{
    const cartProducts = getCartProductsFromLS();
    document.querySelectorAll(".cart-count").forEach(item=>{
        item.textContent = cartProducts.length;
    })
}
