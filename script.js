password = document.getElementById("password");
confirmPassword = document.getElementById("password-confirm")
console.log(password);

password.addEventListener('keyup', function(e) {
    console.log(e.path[0].value);
});

confirmPassword.addEventListener('keyup', function(event){
    console.log(event.path[0].value);
});