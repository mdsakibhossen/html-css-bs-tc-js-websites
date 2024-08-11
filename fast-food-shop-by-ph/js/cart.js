import { getCartProductsCount } from "./getCartProductsCount.js";
import { setCartProductsToLS } from "./setCartProductsToLS.js";
import { showCartProducts } from "./showCartProducts.js";
import { showCartTableOrMsg } from "./showCartTableOrMsg.js";
import { showToastMsg } from "./showToastMsg.js";
import { cartClearBtn } from "./varibales.js";

// Show Cart products
showCartProducts();


// Clear Cart
cartClearBtn.addEventListener("click",()=>{
    setCartProductsToLS([]);
    showCartProducts();
    getCartProductsCount();
    showCartTableOrMsg();
    // Show Message
    showToastMsg("Successfully Cleared!!!");
})


showCartTableOrMsg();