import { addToCart } from "./addToCart.js";
import { getProducts } from "./getProducts.js";
import { productTemplate, productsContainer } from "./varibales.js";

export const showProducts = (amount) =>{
    const products = getProducts({ amount,type:"ALL"});
    // console.log(products);
    productsContainer.innerHTML = "";
    products.forEach(product=>{
        const productCard = document.importNode(productTemplate.content, true);
        productCard.querySelector(".product__card .img img").src = product.image;
        productCard.querySelector(".product__card .img img").alt = product.title;
        productCard.querySelector(".product__card .title").textContent = product.title;
        productCard.querySelector(".product__card .review-amount").textContent = product.review;
        productCard.querySelector(".product__card .price").textContent = product.price;

        productCard.querySelector(".product__card .add-to-cart-btn").addEventListener("click",()=>{
            addToCart(product);
        })

        productsContainer.append(productCard);
    })
}