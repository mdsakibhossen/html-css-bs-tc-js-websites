const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const bars = document.querySelector(".bars");
const times = document.querySelector(".times");
const nav = document.querySelector(".header__container nav");
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const message = document.querySelector("#message");
const sendBtn = document.querySelector("#sendBtn");
const contactMsg = document.querySelector("#contactMsg");
// Header Scroll Effect
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
});

const toggleNav = () => {
    if (bars.style.display === "block") {
        bars.style.display = "none";
        times.style.display = "block";
        nav.classList.add("active");
    } else {
        bars.style.display = "block";
        times.style.display = "none";
        nav.classList.remove("active");
    }
}
// Nav Open & Close
menuBtn.addEventListener("click", () => {
    toggleNav()
});

links.forEach(link => {
    link.addEventListener("click", toggleNav)
});


// Section IsInView Functionality
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // console.log(entry.target.id, entry.isIntersecting);
        if (entry.isIntersecting) {
            const id = entry.target.id;
            // console.log(id);
            links.forEach(link => {
                if (link.href.includes(id)) {
                    link.classList.add("active")
                } else {
                    link.classList.remove("active")
                }
            })
        }
    })
}, {
    root: null, rootMargin: '0px 0px -90% 0px'
});

sections.forEach(section => observer.observe(section));

// Contact Section
sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!fullName.value.trim() || !email.value.trim() || !message.value.trim()) {
        showMsg({ text: "Please, Enter The Required Fields...", isSucceed: false })

    } else {
        showMsg({ text: "Message Send Successfully!!!", isSucceed: true })

    }

});

const showMsg = ({ text, isSucceed }) => {
    if (isSucceed) {
        contactMsg.textContent = text;
        contactMsg.style.color = "green";
    } else {
        contactMsg.textContent = text;
        contactMsg.style.color = "red";
    }
}



