import { nav, rootPath } from "./varibales.js";

export const changeLinkStatus = () => {
    const pathName = location.pathname;
    // console.log(pathName,);
    Array.from(nav.children).forEach(link => {
        // console.log(link.href.replace(rootPath, ""));
        if (link.href.replace(rootPath, "") === pathName) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    })
}
changeLinkStatus()