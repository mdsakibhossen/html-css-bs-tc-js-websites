import { email, formMsg, fullName, message, phoneNumber } from "./variables.js";

export const submitForm = (e) => {
    e.preventDefault();
    if (!fullName.value.trim() || !email.value.trim() || !phoneNumber.value.trim() || !message.value.trim()) {
        formMsg.textContent = "Please Fill All The Fields...";
        formMsg.style.color = "#fb7b7b";
    } else {
        if (!email.value.includes("@") || !email.value.includes(".") || email.value.trim().length < 7) {
            formMsg.textContent = "Please Enter Your Valid Email...";
            formMsg.style.color = "#fb7b7b";
            return false;
        }
        if (!Number(phoneNumber.value.replace("+", "")) || phoneNumber.value.trim().length < 10) {
            formMsg.textContent = "Please Enter Your Valid Number...";
            formMsg.style.color = "#fb7b7b";
            return false;
        }
        formMsg.textContent = "Send Successfully!!!";
        formMsg.style.color = "#15e615";
    }
}