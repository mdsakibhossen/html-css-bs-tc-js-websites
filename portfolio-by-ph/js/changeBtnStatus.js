export const changeBtnStatus = (btn)=>{
    const buttons = document.querySelectorAll(".btn-group button");
    buttons.forEach(button=>{
        if (button === btn) {
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    })
}