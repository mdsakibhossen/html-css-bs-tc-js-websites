import { getProducts } from "./getProducts.js"
import { heroProductTemplate, heroProductsContainer } from "./varibales.js";

export const showHeroProducts = () =>{
    const heroProducts = getProducts({type:"HERO_PRODUCTS"});
    // console.log(heroProducts);
    heroProducts.forEach(item=>{
        const productCard = document.importNode(heroProductTemplate.content, true);
        productCard.querySelector(".hero__card .img img").src = item.image;
        productCard.querySelector(".hero__card .img img").alt = item.title;
        productCard.querySelector(".hero__card .title").textContent = item.title;
        productCard.querySelector(".hero__card .sub-title").textContent = item.subTitle;
        productCard.querySelector(".hero__card .price").textContent = item.price;

        heroProductsContainer.append(productCard);
    })
}