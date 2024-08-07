const loader = document.querySelector("#loader");
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const bar = document.querySelector(".bar");
const nav = document.querySelector(".header__container nav");

// Loader Start
window.addEventListener("load",()=>{
    loader.style.display = "none";
})
// Loader End


// Header Scroll Effect
window.addEventListener("load", ScrollFun);
window.addEventListener("scroll", ScrollFun);
function ScrollFun() {
    if (window.scrollY > 100) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
}
// Nav Open & Close
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle("active");
    if (nav.className === "active") {
        nav.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            nav.classList.remove("active");
        })
    }

})


//Start Contact Form

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submitBtn = document.querySelector("#submitBtn");

//Name Field Validation
// Run on Input in Name Field 
function name_fun() {
    let name_msg = document.querySelector(".name");
    let regexp_name = /^[a-z \ A-Z]{3,20}$/;
    if (regexp_name.test(name.value.trim())) {
        name_msg.innerHTML = "";
        name.classList.remove("is-invalid");
        name_msg.classList.remove("invalid-feedback");
        name.classList.add("is-valid");
    } else {
        name_msg.innerHTML = "Please Enter Your Valid Name";
        name.classList.remove("is-valid");
        name.classList.add("is-invalid");
        name_msg.classList.add("invalid-feedback");
    }
};


//Email Field Validation
// Run on Input in Email Field 
function email_fun() {
    let email_msg = document.querySelector(".email");
    let regexp_email = /^[a-zA-Z_\.\-]([0-9a-zA-Z_\.\-]){1,30}@([a-zA-Z]){3,10}\.([a-zA-Z]){2,4}$/;
    if (regexp_email.test(email.value.trim())) {
        email_msg.innerHTML = "";
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        email_msg.classList.remove("invalid-feedback");
    } else {
        email_msg.innerHTML = "Please Enter Your Valid Email";
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        email_msg.classList.add("invalid-feedback");
    }
};


// Run on Click on Submit Button
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if ((email.value != "") && (name.value != "") && (message.value != "")) {
        if ((email.classList[1] == "is-valid") && (name.classList[1] == "is-valid")) {
            document.getElementsByClassName("alert")[0].classList.add("show");
            document.getElementsByClassName("alert")[0].classList.add("alert-success");
            document.getElementsByClassName("alert")[0].classList.remove("alert-danger");
            document.getElementsByClassName("alert")[0].innerHTML = "Message Send Successfully";
        } else {
            document.getElementsByClassName("alert")[0].classList.add("show");
            document.getElementsByClassName("alert")[0].classList.remove("alert-success");
            document.getElementsByClassName("alert")[0].classList.add("alert-danger");
            document.getElementsByClassName("alert")[0].innerHTML = "Your Information Is Not Valid.";
        }
    } else {
        document.getElementsByClassName("alert")[0].classList.add("show");
        document.getElementsByClassName("alert")[0].classList.remove("alert-success");
        document.getElementsByClassName("alert")[0].classList.add("alert-danger");
        document.getElementsByClassName("alert")[0].innerHTML = "Please Fill All The Fields.";
    }

}) 