import { menuBar, menuClose, nav } from "./varibales.js";

export const toggleMenu = (isMenuOpen) => {
    if (isMenuOpen) {
        menuBar.style.display = "none";
        menuClose.style.display = "block";
        nav.style.transform = "scaleY(1)";
    } else {
        menuBar.style.display = "block";
        menuClose.style.display = "none";
        nav.style.transform = "scaleY(0)";

    }
}