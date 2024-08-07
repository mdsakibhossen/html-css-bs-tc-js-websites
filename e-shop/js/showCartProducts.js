
import { changeQuantity } from "./changeQuantity.js";
import { getProductsFromLS } from "./getProductsFromLS.js";
import { removeCartProductFromLS } from "./removeCartProductFromLS.js";
import { cartContainer, cartTemplate } from "./variables.js";

export const showCartProducts = async (limit = 6) => {
    const cartProductsFromLS = getProductsFromLS();
    // console.log(productsFromApi);

    cartProductsFromLS.forEach(product => {
        const { id, title, description, thumbnail, price,quantity } = product
        const cart = document.importNode(cartTemplate.content, true)
        cart.querySelector(".cart").id = `cart${id}`;
        cart.querySelector("#img").src = thumbnail;
        cart.querySelector("#img").alt = title;
        cart.querySelector("#title").textContent = title.length > 20 ? title.slice(0, 20) + "..." : title;
        cart.querySelector("#description").textContent = description.length > 50 ? description.slice(0, 50) + "..." : description;
        cart.querySelector("#price").textContent = `$${price}`;
        cart.querySelector("#quantity").textContent = quantity;

        cart.querySelector(".increase-quantity-btn").addEventListener("click", () => {
            changeQuantity(product,1);
        });
        cart.querySelector(".decrease-quantity-btn").addEventListener("click", () => {
            changeQuantity(product, -1);
        });
        cart.querySelector(".remove-btn").addEventListener("click", () => {
            removeCartProductFromLS(product.id)
        });

        cartContainer.append(cart);
    })
}