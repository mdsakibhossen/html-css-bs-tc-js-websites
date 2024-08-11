import { getCartProductsFromLS } from "./getCartProductsFromLS.js"
import { removeCartProduct } from "./removeCartProduct.js";
import { updateQuantity } from "./updateQuantity.js";
import { cartTemplate, cartsContainer } from "./varibales.js";

export const showCartProducts = ()=>{
    const cartProducts = getCartProductsFromLS();
    cartsContainer.innerHTML = "";
    let totalPrice = 0;
    let subTotal = 0;
    cartProducts.forEach(cartProduct => {
        const cartItem= document.importNode(cartTemplate.content,true);
        cartItem.querySelector(".img").src = cartProduct.image;
        cartItem.querySelector(".img").alt = cartProduct.title;
        cartItem.querySelector(".title").textContent = cartProduct.title;
        cartItem.querySelector(".price").textContent = `$${cartProduct.price}`;
        cartItem.querySelector(".quantity").textContent = cartProduct.quantity;
        cartItem.querySelector(".sub-total").textContent = `$${cartProduct.price * cartProduct.quantity}`;

        cartItem.querySelector(".remove-btn").addEventListener("click",()=>{
            removeCartProduct(cartProduct.id);
        })

        cartItem.querySelector(".increase-btn").addEventListener("click", () => {
            updateQuantity(cartProduct,1);
        })
        cartItem.querySelector(".decrease-btn").addEventListener("click", () => {
            updateQuantity(cartProduct,-1);
        });

        subTotal = cartProduct.price * cartProduct.quantity;
        totalPrice += subTotal 
        document.querySelector("#totalPrice").textContent = ` $${totalPrice}` 


        
        cartsContainer.append(cartItem);
    });
}