import { checkout } from "./checkout.js";
import { getProductsFromLS } from "./getProductsFromLS.js"
import { getProductsFromApi } from './getProductsFromApi.js';

export const changeQuantity = async (product,value=0)=>{
    
    const cartproductsFromLS = getProductsFromLS();
    const cartProductFromLS = cartproductsFromLS.find(item=>item.id===product.id);
    // console.log(await getProductsFromApi(30));
    const { products: cartProductsFromApi } = await getProductsFromApi(30);
    const cartProductFromApi = cartProductsFromApi.find(item => item.id === product.id);

    if (cartProductFromLS.quantity === 1 && value === -1) {
        return false;
    }
    let quantity = cartProductFromLS.quantity + value;
    // console.log(typeof product.price);
    let price = (cartProductFromApi.price * quantity).toFixed(2);
    const newCartProducts = cartproductsFromLS.map(cartProduct=>{
        if (cartProduct.id === product.id) {
            return { ...cartProduct, quantity,price }
        }
        return cartProduct;
    });
    document.querySelector(`#cart${product.id} #quantity`).textContent = quantity;
    document.querySelector(`#cart${product.id} #price`).textContent = `$${price}`;
    // console.log(quantity);
    localStorage.setItem("cartProducts",JSON.stringify(newCartProducts));

    // Update Checkout
    checkout();
}