import { getProductsFromLS } from "./getProductsFromLS.js"

export const checkout = ()=>{
    const cartProductsFromLS = getProductsFromLS();
    const shipping = 80;
    const tax = 20;
    let total = 0;
    const subTotal = cartProductsFromLS.reduce((acc, item) => acc + Number(item.price),0).toFixed(2);
    // console.log(subTotal);

    total = (Number(subTotal) + shipping + tax).toFixed(2);
    document.querySelector("#subTotal").textContent = `$${subTotal}`;
    document.querySelector("#shipping").textContent = `$${shipping}`;
    document.querySelector("#tax").textContent = `$${tax}`;
    document.querySelector("#total").textContent = `$${total}`;
}