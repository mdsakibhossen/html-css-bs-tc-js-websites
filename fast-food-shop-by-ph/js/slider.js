import { happyClientCards, nextBtn, prevBtn } from "./varibales.js";


let transformX = 0;
let padding = 0;
export const slideLeft = (event) => {

    // console.log(Math.abs(transformX), (happyClientCards.length - 1) * 100);
    if (Math.abs(transformX) < (happyClientCards.length - 1) * 100) {
        transformX -= 100;
        padding -= 2
        happyClientCards.forEach(card => {
            // console.log(card);
            card.style.transform = `translateX(calc(${transformX}% + ${padding}rem))`;
        })
        console.log("run");

    }
    changeBtnStatus();
}
export const slideRight = () => {

    // console.log(Math.abs(transformX) , (happyClientCards.length - 1) * 100);
    if (Math.abs(transformX) > 0) {
        transformX += 100;
        padding += 2
        happyClientCards.forEach(card => {
            // console.log(card);
            card.style.transform = `translateX(calc(${transformX}% + ${padding}rem))`;
        })

    }
    changeBtnStatus();
}
const changeBtnStatus = ()=>{
 
    if (Math.abs(transformX) === 0) {
        prevBtn.style.cursor = "not-allowed";
        prevBtn.style.backgroundColor = "#ccc";
    } else {
        prevBtn.style.cursor = "pointer";
        prevBtn.style.backgroundColor = "#F48E28";
    }
    if (Math.abs(transformX) === (happyClientCards.length - 1) * 100) {
        nextBtn.style.cursor = "not-allowed";
        nextBtn.style.backgroundColor = "#ccc";
    } else {
        nextBtn.style.cursor = "pointer";
        nextBtn.style.backgroundColor = "#F48E28";
    }
}

changeBtnStatus();

// const changeBtnStatus = (event)=>{
//     if (Math.abs(transformX) === (happyClientCards.length - 1) * 100) {


//     }
// }