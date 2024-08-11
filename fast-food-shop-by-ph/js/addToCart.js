import { getCartProductsCount } from "./getCartProductsCount.js";
import { getCartProductsFromLS } from "./getCartProductsFromLS.js";
import { setCartProductsToLS } from "./setCartProductsToLS.js";
import { showToastMsg } from "./showToastMsg.js";

export const addToCart = (product)=>{
    let cartProducts = getCartProductsFromLS();
    const isExist = cartProducts.find(item=> item.id === product.id);
    if (isExist) {
        showToastMsg("This Product is Already in The Cart.")
        return false;
    }

    // Saving To Local Storage
    setCartProductsToLS([{...product,quantity: 1},...cartProducts]);

    // Update Cart Icon Count Number
    getCartProductsCount();
    // Show Message
    showToastMsg("Added Successfully!!!");
}