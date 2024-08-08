const formSubmit = document.querySelector("#form-container");
const leftForm = document.querySelector(".left-form");
const logMsg = document.createElement("p");
leftForm.appendChild(logMsg);


formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.querySelector("#first-name");
    const userSurName = document.querySelector("#last-name");
    const userEmail = document.querySelector("#email");
    const userPhoneNumber = document.querySelector("#phone-number");
    const userPwd = document.querySelector("#pwd");
    const userConfirmPwd = document.querySelector("#confirm-pwd");
    
    const clearContent = () => {
        userName.value = "";
        userSurName.value = "";
        userEmail.value = "";
        userPhoneNumber.value = "";
        userPwd.value = "";
        userConfirmPwd.value = "";
    };
    const checkPwd = () => {
        if(userPwd.value === userConfirmPwd.value) {
            userPwd.classList.remove("pwd-error");
            userConfirmPwd.classList.remove("pwd-error");
            logMsg.classList.remove("msg-error");
            logMsg.classList.add("msg-match");
            userPwd.classList.add("pwd-match");
            userConfirmPwd.classList.add("pwd-match");
            logMsg.textContent = "Passwords match";
            clearContent();    
        } else {
            logMsg.classList.remove("msg-match");
            logMsg.classList.add("msg-error");
            userPwd.classList.add("pwd-error");
            userConfirmPwd.classList.add("pwd-error");
            logMsg.textContent = "* Passwords do not match";
            clearContent();
        }
        
    };
    checkPwd();
});