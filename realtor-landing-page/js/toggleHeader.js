import { header } from "./variables.js"

export const toggleHeader = (y) => {
    if (y > 30) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}