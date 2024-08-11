export const getCartProductsFromLS = ()=>{
    let cartProducts = localStorage.getItem("cartProductsLS");
    return cartProducts ? JSON.parse(cartProducts) : [];
}