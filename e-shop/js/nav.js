import { DOMAIN_NAME, navLinks, navWrapper } from "./variables.js";

// Open Mobile Nav(Menu)
export const openMenu = () => {
    navWrapper.classList.add("active");
}
// Close Mobile Nav(Menu)
export const closeMenu = () => {
    navWrapper.classList.remove("active");
}

// Change Nav-link Active Status Based On URL
export const changeLinkStatus = () => {
    navLinks.forEach(navLink => {
        // console.log(navLink.href.replace(DOMAIN_NAME,"") , location.pathname);
        if (navLink.href.replace(DOMAIN_NAME, "") === location.pathname) {
            navLink.classList.add("active");
        } else {
            navLink.classList.remove("active");
        }
    })
}