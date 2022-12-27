let passwordContainer = document.getElementById("password-container");
let passwordConfirm = document.getElementById("password-confirm");


passwordContainer.addEventListener("keyup", function(event){
    VerifyPasswordsMatch();
})

passwordConfirm.addEventListener('keyup', function(event){
    VerifyPasswordsMatch()
})


function VerifyPasswordsMatch() {
    if(password.value === passwordConfirm.value) {
        passwordContainer.classList.add("no-after");
    } else {
        passwordContainer.classList.remove("no-after");
    }
}

