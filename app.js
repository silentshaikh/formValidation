let myName = document.getElementById("user");
let myEmail = document.getElementById("email");
let myPhone = document.getElementById("number");
let myMessage = document.getElementById("message");
let validName = false;
let validEmail = false;
let validPhone = false;
let validMessage = false;
myName.addEventListener("blur",() => {
    let regMatch = /^[a-z\_0-9]{2,13}/;
    let nameError = myName.nextElementSibling;
    let nameValue = myName.value;
    if(nameValue.match(regMatch)){
        validName = true;
    }else{
        nameError.innerHTML = `Please Enter a User Name`;
        nameError.style.color = "crimson";
        setTimeout(() => {
            nameError.innerHTML = ``;
        }, 5000);
        validName = false;
    }
});
myEmail.addEventListener("blur", () => {
    let regMatch = /^([a-z_0-9]+)@([a-z]+)\.([a-z]){2,7}$/;
    let emailError = myEmail.nextElementSibling;
    let emailValue = myEmail.value;
    if(emailValue.match(regMatch)){
        validEmail = true;
    }else{
        emailError.innerHTML = `Please Enter a Correct Email`;
        emailError.style.color = "crimson";
        setTimeout(() => {
            emailError.innerHTML = ``;
        }, 5000);
        validEmail = false;
    }
});
myPhone.addEventListener("blur", () => {
    let regMatch = /^([0-9]){11}$/;
    let phoneError = myPhone.nextElementSibling;
    let phoneValue = myPhone.value;
    if(phoneValue.match(regMatch)){
        validPhone = true;
    }else{
        phoneError.innerHTML = `Please Enter a only 11 Digit`;
        phoneError.style.color = "crimson";
        setTimeout(() => {
            phoneError.innerHTML = ``;
        }, 5000);
        validPhone = false;
    }
});
myMessage.addEventListener("blur",() => {
    let messageError = myMessage.nextElementSibling;
    if(myMessage.value === ""){
        messageError.innerHTML = "Please Enter Your Message";
        messageError.style.color = "crimson";
        setTimeout(() => {
            messageError.innerHTML = ``;
        }, 5000);
        validMessage = false;
    }else{
        validMessage = true;
    }
});
let formBtn = document.querySelector(".btn");
formBtn.addEventListener("click",(event) => {
    event.preventDefault();
    if(validEmail == true && validName == true && validPhone == true &&validMessage == true ){
        alert("Congratulation, Your From has been Submitted");
    }else{
        alert("Your From has not been Submit");
    }
});
