let input = document.querySelector("input");
let btn = document.querySelector("#btn")
let fristName = document.querySelector("#fristName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let newPassword = document.querySelector("#newPassword");
let confrmPassword = document.querySelector("#confrmPassword");
let date = document.querySelector("#date");

let warnFristName = document.querySelector("#warn-fristName");
let warnLastName = document.querySelector("#warn-lastName");
let warnEmail = document.querySelector("#warn-email");
let warnNewPassword = document.querySelector("#warn-newPassword");
let warnconfmPassword = document.querySelector("#warn-confrmPassword");

let fristNameText = document.querySelector("#fristName-text");
let lastNameText = document.querySelector("#lastNameText");
let newPasswordText = document.querySelector("#newPassword-text");
let confrmPasswordText = document.querySelector("#confrmPassword-text");
let emailText = document.querySelector("#email-text");



// Frist Name
let firstFocus = true;
fristName.addEventListener("focus", function(){
    warnFristName.style.display = "none"; 
    if(firstFocus){
        fristNameText.style.display = "none"
    }
    else{
        if(fristName.value === ""){
            fristNameText.style.display = "block";
        }
    }
     firstFocus = false;
});
fristName.addEventListener("blur", function(){
    if(fristName.value === ""){
        warnFristName.style.display = "block";
        fristName.style.border = "2px solid red";
        fristNameText.style.display = "none";

    }
});
fristName.addEventListener("input", function(){
    if(fristName.value === ""){
        fristName.style.border = "2px solid red";
        fristNameText.style.display = "block";

    }
    else{
        fristName.style.border = "2px solid blue";
        fristNameText.style.display = "none";

    }
});
 


// Last Name
let lastFocus = true;
lastName.addEventListener("focus", function(){
    warnLastName.style.display = "none";
    if(lastFocus){
        lastNameText.style.display = "none"
    }
    else{
        if(lastName.value === ""){
        lastNameText.style.display = "block";
        }
    }
lastFocus = false;

});

lastName.addEventListener("blur", function(){
    if(lastName.value === ""){
        if(lastName.value === ""){
            warnLastName.style.display = "block";
            lastName.style.border = "2px solid red";
            lastNameText.style.display = "none";
        }
    }
});
lastName.addEventListener("input", function(){
    if(lastName.value === ""){
        lastName.style.border = "2px solid red";
        lastNameText.style.display = "block";
    }
    else{
        lastName.style.border = "2px solid blue";
        lastNameText.style.display = "none";

    }
});


// Email
let emailFocus = true;
email.addEventListener("focus", function(){
    warnEmail.style.display = "none";
    if(emailFocus){
        emailText.style.display = "none";
    }
    else{
        if(email.value === ""){
            emailText.style.display = "block"
        }
    }
    emailFocus = false;
    
});
email.addEventListener("blur", function(){
    if(email.value === ""){
        warnEmail.style.display = "block";
        email.style.border = "2px solid red";
        emailText.style.display = "none"
    }
});
email.addEventListener("input", function(){
    if(email.value === ""){
        email.style.border = "2px solid red";
        emailText.style.display = "block"
    }
    else{
        email.style.border = "2px solid blue";
        emailText.style.display = "none";
    }
});


// New Password
let newPasswordFocus = true;
newPassword.addEventListener("focus", function(){
    warnNewPassword.style.display = "none";
    if(newPasswordFocus){
        newPasswordText.style.display = "none"
    }
    else{
        if(newPassword.value === ""){
            newPasswordText.style.display = "block";
        }
    }
    newPasswordFocus = false;
});
newPassword.addEventListener("blur", function(){
    if(newPassword.value === ""){
        warnNewPassword.style.display = "block";
        newPassword.style.border = "2px solid red";
        newPasswordText.style.display = "none";
    }
});
newPassword.addEventListener("input", function(){
    if(newPassword.value === ""){
        newPassword.style.border = "2px solid red";
        newPasswordText.style.display = "block";
    }
    else{
        newPassword.style.border = "2px solid blue";
        newPasswordText.style.display = "none";
    }
})


// Confrm Password
let confrmPasswordFocus = true;
confrmPassword.addEventListener("focus", function(){
    warnconfmPassword.style.display = "none";
    if(confrmPasswordFocus){
        confrmPasswordText.style.display = "none";
    }
    else{
        if(confrmPassword.value === ""){
            confrmPasswordText.style.display = "block";
        }
    }
    confrmPasswordFocus = false;
});
confrmPassword.addEventListener("blur", function(){
    if(confrmPassword.value === ""){
        warnconfmPassword.style.display = "block";
        confrmPassword.style.border = "2px solid red";
        confrmPasswordText.style.display = "none";
    }
});
confrmPassword.addEventListener("input", function(){
    if(confrmPassword.value === ""){
        confrmPassword.style.border = "2px solid red";
        confrmPasswordText.style.display = "block";
    }
    else{
        confrmPassword.style.border = "2px solid blue";
        confrmPasswordText.style.display = "none";
    }
});

// Submit and Alert
btn.addEventListener("click", function(){
    if(fristName.value == "" || lastName.value === "" || email.value === "" || newPassword.value === "" || confrmPassword.value === "" || date.value === "" ){
        alert("❌ Unsuccessful: Please fill all fields!")
    }
    else{
        alert("✅ Successful: Your account has been registered!")

    }
});


