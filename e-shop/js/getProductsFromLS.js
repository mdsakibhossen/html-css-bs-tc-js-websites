export const getProductsFromLS = () => {
    let cartProducts = localStorage.getItem("cartProducts");
    return cartProducts ? JSON.parse(cartProducts) : [];
}