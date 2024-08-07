import { changeCatActiveStatus } from "./changeCatActiveStatus.js";
import { getCategoriesFromApi } from "./getCategoriesFromApi.js"
import { showProducts } from "./showProducts.js";
import { categoriesContainer } from "./variables.js";

export const showCategories = async ()=>{
    let categories = await getCategoriesFromApi();
    categories = categories.slice(0,5);
    categories.forEach(category=>{
        const { slug,name,url } = category;
        const button = document.createElement("button");
        button.textContent = name;
        button.setAttribute("data-cat",slug);
        button.addEventListener("click",(e)=>{
            changeCatActiveStatus(e);
            showProducts(10,button.dataset.cat);
        })
        // console.log(categoriesContainer.children);
        categoriesContainer.append(button);
    })
}