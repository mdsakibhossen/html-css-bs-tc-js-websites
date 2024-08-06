import { categories } from "../api/data.js"
import { changeBtnStatus } from "./changeBtnStatus.js";
import { showPortfolios } from "./showPortfolios.js";

export const showCategories = ()=>{
    categories.forEach(category=>{
        const button = document.createElement("button");
        button.textContent = category.name;
        button.addEventListener("click",()=>{
            showPortfolios(category.id);
            changeBtnStatus(button)
        })
        document.querySelector(".btn-group").append(button)
    })
}