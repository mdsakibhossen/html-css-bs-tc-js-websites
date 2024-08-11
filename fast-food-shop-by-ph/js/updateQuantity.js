import { getCartProductsCount } from "./getCartProductsCount.js";
import { getCartProductsFromLS } from "./getCartProductsFromLS.js"
import { setCartProductsToLS } from "./setCartProductsToLS.js";
import { showCartProducts } from "./showCartProducts.js";

export const updateQuantity = (product, value) => {

    if (value === -1 && product.quantity === 1) {
        return false;
    }
    let cartProducts = getCartProductsFromLS()

    cartProducts = cartProducts.map(item => {
        if (item.id === product.id) {
            return {
                ...product, quantity: product.quantity + value
            }
        }
        return item;
    })

    setCartProductsToLS(cartProducts);
    getCartProductsCount()
    showCartProducts()


    // if (value === 1) {
    //     increaseHnadler(product)
    // }else{
    //     decreaseHandler(product)
    // }
}


// const increaseHnadler = (product) => {
//     const newProducts = cartProducts.map(item => {
//         if (item.id === product.id) {
//             return {
//                 ...product, quantity: product.quantity + value
//             }
//         }
//         return item
//     })
//     let quantity = product.quantity++;

// }
// const decreaseHandler = (product) => {

// }