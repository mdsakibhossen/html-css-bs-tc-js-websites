import { getProductsFromLS } from "./getProductsFromLS.js"

export const toggleCartTable = () => {
    const cartProducts = getProductsFromLS();
    if (cartProducts.length > 0) {
        document.querySelector("#cartTable").style.display = "block";
        document.querySelector("#checkout").style.display = "block";
        document.querySelector("#noProductsMsg").style.display = "none";
    } else {
        document.querySelector("#cartTable").style.display = "none";
        document.querySelector("#checkout").style.display = "none";
        document.querySelector("#noProductsMsg").style.display = "block";
    }
}