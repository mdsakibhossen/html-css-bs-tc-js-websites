import { submitHandler } from "./submitHandler.js";
import { sendBtn } from "./variables.js";

sendBtn.addEventListener("click", (e) => submitHandler(e));