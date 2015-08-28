function validate() {


    if (document.form.username.value == "" || document.form.username.value == "null") {
        document.getElementById("uname").innerHTML = "The username is required";
        document.form.username.focus();
        document.getElementById("uname").style.color = "orangered";
        document.getElementById("inputName").style.background = "lightblue";
    }

    else if (document.form.username.value.length < 5) {
        document.getElementById("uname").innerHTML = "The username is required";
        document.form.username.focus();
        document.getElementById("uname").style.color = "orangered";
        document.getElementById("inputName").style.background = "lightblue";
    }

    else {
        document.getElementById("uname").innerHTML = "";
        document.getElementById("inputName").style.background = "white";
    }

    if (document.form.password.value === "") {
        document.getElementById("psd").innerHTML = "The password field is required";
        document.getElementById("psd").style.color = "orangered";
        document.getElementById("inputPassword").style.background = "lightblue";
        document.form.password.focus();

    }
    else {
        document.getElementById("psd").innerHTML = "";
        document.getElementById("psd").style.color = "orangered";
        document.getElementById("inputPassword").style.background = "white";
    }


    if (document.form.confirmPassword.value == "") {
        document.getElementById("cpsd").innerHTML = "The confirm password field is required";
        document.getElementById("cpsd").style.color = "orangered";
        document.getElementById("confirmPassword").style.background = "lightblue";
        document.form.confirmPassword.focus();
        document.getElementById("psdAlert").innerHTML = "";
    }
    
    else {
        document.getElementById("cpsd").innerHTML = "";
        document.getElementById("cpsd").style.color = "orangered";
        document.getElementById("confirmPassword").style.background = "";
    }

    var pasd = document.form.password.value;
    var cpasd = document.form.confirmPassword.value;
    if (pasd !== cpasd) {
        document.getElementById("psdAlert").innerHTML = "The password is not matching";
        document.getElementById("confirmPassword").style.background = "lightblue";
        document.getElementById("psdAlert").style.color = "orangered";
        document.getElementById("cpsd").innerHTML = "";
    }
    else {
        document.getElementById("psdAlert").innerHTML = "";
    }

    if (document.form.firstName.value == "") {
        document.getElementById("fname").innerHTML = "The firstname field is required";
        document.getElementById("fname").style.color = "orangered";
        document.getElementById("firstName").style.background = "lightblue";
        document.form.firstName.focus();

    }
    else {
        document.getElementById("fname").innerHTML = "";
        document.getElementById("firstName").style.background = "white";
    }
    if (document.form.lastName.value === "") {
        document.getElementById("lname").innerHTML = "The lastname field is required";
        document.getElementById("lname").style.color = "orangered";
        document.getElementById("lastName").style.background = "lightblue";
        document.form.lastName.focus();

    }
    else {
        document.getElementById("lname").innerHTML = "";
        document.getElementById("lastName").style.background = "white";
    }
    if (document.form.email.value == "") {
        document.getElementById("mail").innerHTML = "The email field is required";
        document.getElementById("email").style.background = "lightblue";
        document.getElementById("mail").style.color = "orangered";
        document.form.email.focus();

    }
    else {
        document.getElementById("mail").innerHTML = "";
        document.getElementById("email").style.background = "white";
    }
    return false;
    
}

console.log(validate());
