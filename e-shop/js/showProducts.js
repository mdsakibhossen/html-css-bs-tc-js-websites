import { addProductCartToLS } from "./addProductCartToLS.js";
// import { getProductsFromApi } from "./getProductsFromApi.js";
import { getProductsFromApiByCat } from "./getProductsFromApiByCat.js";
import { productsContainer } from "./variables.js";

export const showProducts = async (limit = 6,catName="all") => {
    const { products: productsFromApi } = await getProductsFromApiByCat(limit,catName);
    // console.log("Run");
    // console.log(productsFromApi);
    productsContainer.innerHTML = ""
    productsFromApi.forEach(product => {
        const { id, title, description, thumbnail, price } = product
        const productCard = document.importNode(productCardTemplate.content, true);
        productCard.querySelector(".card").id = `card${id}`
        productCard.querySelector("#img").src = thumbnail;
        productCard.querySelector("#img").alt = title;
        productCard.querySelector("#title").textContent = title.length > 20 ? title.slice(0, 20) + "..." : title;
        productCard.querySelector("#description").textContent = description.length > 80 ? description.slice(0,80)+"...":description;
        productCard.querySelector("#price").textContent = `$${price}`;

        productCard
            .querySelector(".btn")
            .addEventListener("click", () => {
                addProductCartToLS({ id, title, description, thumbnail, price,quantity:1 })
            });

        productsContainer.append(productCard);
    })
}