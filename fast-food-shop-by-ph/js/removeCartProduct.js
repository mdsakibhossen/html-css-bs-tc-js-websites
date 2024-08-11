import { getCartProductsCount } from "./getCartProductsCount.js";
import { getCartProductsFromLS } from "./getCartProductsFromLS.js"
import { setCartProductsToLS } from './setCartProductsToLS.js';
import { showCartProducts } from "./showCartProducts.js";
import { showCartTableOrMsg } from "./showCartTableOrMsg.js";
import { showToastMsg } from "./showToastMsg.js";

export const removeCartProduct = (cartId)=>{
    let cartProducts = getCartProductsFromLS();
    cartProducts = cartProducts.filter(item=>item.id!==cartId);
    // console.log(cartProducts);
    // Save Into Local Storage
    setCartProductsToLS(cartProducts);
    // Update Cart Icon Count Number
    getCartProductsCount();
    // Recall Show Cart Products
    showCartProducts();
    // Show Table Or Message
    showCartTableOrMsg();
    // Show Message
    showToastMsg("Removed Successfully!!!");
}