const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const formMsg = document.querySelector("#formMsg");

export const formSubmitHandler = ()=>{
    console.log(formMsg);
    if (!userName.value || !email.value || !message.value) {
        formMsg.textContent = "Please Fill All The Necessary Fields...";
        formMsg.style.color = "red";
    }else{
        formMsg.textContent = "Send Successfully!!!";
        formMsg.style.color = "#21f521";
    }
}