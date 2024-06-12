let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signUp = document.getElementById("submit")


let usersData = []
if (localStorage.getItem("userinfo")) {
    usersData = JSON.parse(localStorage.getItem("userinfo"))
}

signUp.addEventListener("click", sign)

let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let regexPass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

function sign() {
    if (regexEmail.test(email.value)) {
        if (regexPass.test(password.value)) {
            alert("please Enter a Valid Password")

            let data = {
                name: username.value,
                email: email.value,
                password: password.value
            }
            let newUser = usersData.find((item) => {
                return item.email == email.value
            })
            if (newUser)
                alert("Email already Exist")
            else {
                usersData.push(data)
                localStorage.setItem("userinfo", JSON.stringify(usersData))
                alert("Sign Up Successfully")
            }
        }
        else {
            alert("please Enter a Valid Password")
        }
    }
    else {
        alert("please Enter a Valid Email")
    }
}

