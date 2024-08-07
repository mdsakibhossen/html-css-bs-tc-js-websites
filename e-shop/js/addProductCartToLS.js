import { getProductsFromLS } from "./getProductsFromLS.js"
import { showToastMsg } from "./showToastMsg.js";
import { updateCartIconNumber } from "./updateCartIconNumber.js";

export const addProductCartToLS = (product)=>{
    const cartProductsFromLS = getProductsFromLS();
    // console.log(product);
    const isExist = cartProductsFromLS.find(item=> item.id === product.id)
    if (isExist) {
        showToastMsg("This Product is Already in The Cart.")
        return;
    }
    localStorage.setItem("cartProducts", JSON.stringify([...cartProductsFromLS,product]));
    // Update Cart Number When Product is Added to Cart
    updateCartIconNumber();

    // Show Message
    showToastMsg("Added Successfully!!!");
}