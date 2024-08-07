// Declaration of Variables
export const DOMAIN_NAME = `${window.location.protocol}//${window.location.host}`;
console.log(DOMAIN_NAME);
export const navWrapper = document.querySelector(".nav-wrapper");
export const navLinks = document.querySelectorAll("nav a");
export const menuOpenBtn = document.querySelector("#menuOpenBtn");
export const menuCloseBtn = document.querySelector("#menuCloseBtn");
export const productsContainer = document.querySelector("#productsContainer");
export const productCardTemplate = document.querySelector("#productCardTemplate");

export const cartsNumber = document.querySelector("#cartsNumber");

// Category
export const categoriesContainer = document.querySelector("#categoriesContainer");

// Cart
export const cartContainer = document.querySelector("#cartContainer");
export const cartTemplate = document.querySelector("#cartTemplate");

// Toast
export const toastMsgContainer = document.querySelector("#toastMsgContainer");


// NewsLetter
export const newsletterEmail = document.querySelector("#newsletterEmail");
export const newsletterMsg = document.querySelector("#newsletterMsg");
export const subscribeBtn = document.querySelector("#subscribeBtn");

// Contact Form
export const name = document.querySelector("#name");
export const email = document.querySelector("#email");
export const subject = document.querySelector("#subject");
export const message = document.querySelector("#message");
export const formMsg = document.querySelector(".form-msg");
export const sendBtn = document.querySelector("#sendBtn");
