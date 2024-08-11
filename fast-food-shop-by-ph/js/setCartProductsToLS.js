export const setCartProductsToLS = (cartProducts) =>{
    localStorage.setItem("cartProductsLS",JSON.stringify(cartProducts));
}