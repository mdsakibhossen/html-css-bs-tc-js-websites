import { changeLinkStatus } from "./changeLinkStatus.js";
import { getCartProductsCount } from "./getCartProductsCount.js";
import { toggleMenu } from "./toggleMenu.js";
import { toggleSearchBar } from "./toggleSearchBar.js";
import { menuBtn, nav, searchBtn, subscriptionBtn1, subscriptionBtn2, subscriptionEmail1, subscriptionEmail2, subscriptionMsg1, subscriptionMsg2 } from "./varibales.js";

// Variable Declaration & Initializations
let isMenuOpen = false;
let isSearchOpen = false;



// Header Scroll
window.addEventListener("scroll", () => {
    if (scrollY > 0) {
        document.querySelector("#header").classList.add("active");
    } else {
        document.querySelector("#header").classList.remove("active");
    }
})

// Navbar Section Start

menuBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    toggleMenu(isMenuOpen)
})
Array.from(nav.children).forEach(link => {
    link.addEventListener("click", () => {
        isMenuOpen = false;
        toggleMenu(isMenuOpen);
        changeLinkStatus(link);
    })
})
// Navbar Section End


// Search Bar Section Start

searchBtn.addEventListener("click", () => {
    if (innerWidth < 1024) {
        isSearchOpen = !isSearchOpen;
        toggleSearchBar(isSearchOpen);

    }
})
// Search Bar Section End

// Update Cart Count
getCartProductsCount();



// Newsletter & Footer Subscription Section Start
const showMsg = (email, msgBox) => {
    // console.log(email);
    if (email && email.includes("@") && email.includes(".") && email.length > 7) {
        msgBox.innerHTML = "Subscribed Successfully !!!";
        msgBox.style.color = "lightgreen";
    } else {
        msgBox.innerHTML = "Failed To Subscribe!!! Please Check Your Email...";
        msgBox.style.color = "red";
    }

}
if (subscriptionBtn1) {
    subscriptionBtn1.addEventListener("click", () => {
        showMsg(subscriptionEmail1.value, subscriptionMsg1);
    })
}
if (subscriptionBtn2) {
    subscriptionBtn2.addEventListener("click", () => {
        showMsg(subscriptionEmail2.value, subscriptionMsg2);
    })
}

// Newsletter & Footer Subscription Section End