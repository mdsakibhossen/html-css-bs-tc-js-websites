import { menuBtn, navWrapper } from "./variables.js";

let isMenuOpened = false;
export const toggleNav = () => {
    if (isMenuOpened) {
        isMenuOpened = false;
        menuBtn.classList.remove("active");
        navWrapper.classList.remove("active");
    } else {
        isMenuOpened = true;
        menuBtn.classList.add("active");
        navWrapper.classList.add("active");
    }
}