import { getProductsFromLS } from "./getProductsFromLS.js"
import { cartsNumber } from "./variables.js"

export const updateCartIconNumber = ()=>{
    cartsNumber.textContent = getProductsFromLS().length;
}