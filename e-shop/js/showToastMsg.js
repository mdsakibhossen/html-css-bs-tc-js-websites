import { toastMsgContainer } from "./variables.js"

export const showToastMsg = (msgText="Text")=>{
    const toast = document.createElement("div");
    toast.id = "toast";
    toast.textContent = msgText;
    toast.style.transform = "translateX(0)";
    toastMsgContainer.append(toast);

    setTimeout(()=>{
        toast.remove();
    },3000)
}