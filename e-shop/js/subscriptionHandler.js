
import { newsletterEmail, newsletterMsg } from "./variables.js";
export const subscriptionHandler = ()=>{
    if (!newsletterEmail.value) {
        showFailedMsg("Please Enter Your Email...")
    } else if (newsletterEmail.value.includes("@") && newsletterEmail.value.includes(".")){
        showSucceedMsg();
    } else {
        showFailedMsg("Please Enter Your Vaild Email...")
    }
}

const showSucceedMsg = (msg = "Subscribed Successfully!!!") => {
    newsletterMsg.innerHTML = msg;
    newsletterMsg.style.color = "#13f313";
    newsletterMsg.style.marginBottom = ".5rem";
}
const showFailedMsg = (msg = "Failed to Subscribed!!!") => {
    newsletterMsg.innerHTML = msg;
    newsletterMsg.style.color = "red";
    newsletterMsg.style.marginBottom = ".5rem";
}