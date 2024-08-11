import { showHeroProducts } from "./showHeroProducts.js";
import { showProducts } from "./showProducts.js";
import { closeBtn, nextBtn, prevBtn, productBtn, videoBtn } from "./varibales.js";
import { slideLeft, slideRight } from "./slider.js";
import { hideVideo, showVideo } from "./video.js";

let isProductBtnActive = false;


// Show Hero Products
showHeroProducts()

// Show Popular Products
showProducts(6);
productBtn.addEventListener("click",()=>{
    if (!isProductBtnActive) {
        showProducts();
        isProductBtnActive = true;
        productBtn.querySelector("#text").textContent = "Hide More Products"
    }else{
        showProducts(6);
        isProductBtnActive = false;
        productBtn.querySelector("#text").textContent = "Show More Products"
    }
});



nextBtn.addEventListener("click", () => {
    slideLeft();
})

prevBtn.addEventListener("click", () => {
    slideRight();
})

// Video
videoBtn.addEventListener("click", showVideo);
closeBtn.addEventListener("click", hideVideo);
