import { changeLinkStatus, closeMenu, openMenu } from "./nav.js";
import { subscriptionHandler } from "./subscriptionHandler.js";
import { updateCartIconNumber } from "./updateCartIconNumber.js";
import { menuCloseBtn, menuOpenBtn, navLinks, subscribeBtn } from "./variables.js";


// Click Menu Button to Open Mobile Nav(Menu)
menuOpenBtn.addEventListener("click", openMenu);

// Click Menu Close Button to Close Mobile Nav(Menu)
menuCloseBtn.addEventListener("click", closeMenu);

// Mobile Nav(Menu) also Close when Nav-Links are Clicked
navLinks.forEach(navLink => {
    navLink.addEventListener("click", closeMenu);
});

// Change Link Status when Page Load
changeLinkStatus();

// Update Cart Number
updateCartIconNumber();

// Subscription Newsletter
if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => subscriptionHandler())
}


