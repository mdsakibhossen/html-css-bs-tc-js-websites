import { changeCatActiveStatus } from "./changeCatActiveStatus.js";
import { showCategories } from "./showCategories.js";
import { showProducts } from "./showProducts.js";
import { categoriesContainer } from "./variables.js";

// Show Products On Products Page
showProducts(15);
showCategories();

const allCatBtn = categoriesContainer.children[0];
// console.log(allCatBtn);
allCatBtn.addEventListener("click", (e) => {
    changeCatActiveStatus(e);
    showProducts(15, allCatBtn.dataset.cat);
})


