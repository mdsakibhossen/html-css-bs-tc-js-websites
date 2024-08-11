import { search, searchClose, searchIcon } from "./varibales.js";

export const toggleSearchBar = (isSearchOpen) => {
    if (isSearchOpen) {
        searchIcon.style.display = "none";
        searchClose.style.display = "block";
        search.style.transform = "scaleX(1)";
    } else {
        searchIcon.style.display = "block";
        searchClose.style.display = "none";
        search.style.transform = "scaleX(0)";
    }
}