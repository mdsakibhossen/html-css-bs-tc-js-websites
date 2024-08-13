import { changeLinkStatus } from "./changeLinkStatus.js";
import { clientReviewSlider, featuredImageSlider, featuredPropertiesSlider, heroSlider } from "./slider.js";
import { submitForm } from "./submitForm.js";
import { toggleHeader } from "./toggleHeader.js";
import { toggleNav } from "./toggleNav.js";
import { appointmentBtn, links, menuBtn, moveToTopBtn } from "./variables.js";


// Window Scrolled Header Animation
window.addEventListener("scroll", () => {
    toggleHeader(scrollY);
})
// Default (When Refresh)
toggleHeader(scrollY);

// Menu Open & Close
menuBtn.addEventListener("click", toggleNav);
links.forEach(link => {
    link.addEventListener("click", toggleNav);
})

// Hero Slider
heroSlider();

// Featured Properties Slider
featuredPropertiesSlider();

// Featured Images Slider
featuredImageSlider();

// Featured Properties Slider
clientReviewSlider();

// Submit Contact Form
appointmentBtn.addEventListener("click", submitForm);

// Change Link Status According to Section on View
changeLinkStatus()

// Show Move to Top Button When Scrolled
window.addEventListener("scroll", () => {
    if (scrollY > innerHeight) {
        moveToTopBtn.style.display = "flex";
    } else {
        moveToTopBtn.style.display = "none";
    }
})
// Move to Top on Clicked
moveToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
