import { email, formMsg, message, name, subject } from "./variables.js";

export const submitHandler = (e) => {
    e.preventDefault();
    if (!name.value || !email.value || !subject.value || !message.value) {
        showFailedMsg("Please Fill All The Fields...")
    } else {
        if (!email.value.includes("@") && !email.value.includes(".")) {
            showFailedMsg("Please Enter Your Valid Email...")
        } else {
            showSucceedMsg();
        }

    }
}
const showSucceedMsg = (msg = "Send Successfully!!!") => {
    formMsg.innerHTML = msg;
    formMsg.style.color = "#13f313";
}
const showFailedMsg = (msg = "Failed to Send!!!") => {
    formMsg.innerHTML = msg;
    formMsg.style.color = "red";
}