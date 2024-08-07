import { categoriesContainer } from './variables.js';

export const changeCatActiveStatus = (e)=>{
    // buttons.forEach(button=>{
        
    // })
    const buttons = categoriesContainer.children;
    // console.log(buttons);
    
    for(let button of buttons){
        if (e.target === button) {
            button.classList.add("active")
        } else {
            button.classList.remove("active")
        }
    }
}