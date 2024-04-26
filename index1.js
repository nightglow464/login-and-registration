function move() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('SIGN').style.display = 'block';
}
    



function forgot() {
    let email = prompt("Enter your email");
    let useremail = localStorage.getItem('usermail');
    let userpass = localStorage.getItem('userpassword');

    if (email !== useremail) {
        alert("Email not found!");
    } else {
        alert("Your password is: " + userpass);
    }
}





function login() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    console.log(email, password);

    let useremail = localStorage.getItem('usermail')
    let userpass = localStorage.getItem('userpassword')

    if (email != useremail) {
        alert("INVALID EMAIL !")
    }
    else if (password != userpass) {
        alert("INVALID PASSWORD")
    }
    else {
        alert("Logged in successfully !")
    }

}



function signup() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('SIGN').style.display = 'none';

    let name1 = document.getElementById('name').value
    let email = document.getElementById('mail').value
    let passw = document.getElementById('pass').value

    let userdata = {
        username: name1,
        usermail: email,
        userpassword: passw,
    }


    if (name1 == "") {
        alert("Enter username")
    }
    else if (email == "") {
        alert("Enter emaail")
    }
    else if (passw == "") {
        alert("Enter password")
    }
    else {
        localStorage.setItem("username", name1)
        localStorage.setItem("usermail", email)
        localStorage.setItem("userpassword", passw)
        alert("You have successfully registered !")
        
    }


}