import { links, sections } from "./variables.js";

export const changeLinkStatus = () => {
    // Section IsInView Functionality
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                links.forEach(link => {
                    if (link.dataset.idvalue === id) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                })
            }
        })
    }, {
        root: null, threshold: 0.5
    });

    sections.forEach(section => observer.observe(section));
}
