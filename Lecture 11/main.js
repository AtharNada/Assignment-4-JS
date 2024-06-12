let email = document.getElementById("email")
let password = document.getElementById("password")
let username = document.getElementById("username")
let signUp = document.getElementById("submit")
let logIn = document.getElementById("login")
let usersData = []
if (localStorage.getItem("Data")) {
    usersData = JSON.parse(localStorage.getItem("Data"))
}
signUp.addEventListener("click", signUp)
let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let regexPass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

function signUp() {
    document.getElementById("congrats").classList.replace("d-block", "d-none")
    if (regexEmail.test(email.value)) {
        document.getElementById("validp").classList.replace("d-block", "d-none")
        if (regexPass.test(password.value)) {
            document.getElementById("validp").classList.replace("d-block", "d-none")
            let data = {
                email: email.value,
                password: password.value,
                name: username.value,
            }
            let newData = usersData.find((item) => {
                return item.email == email.value
            })
            if (newData) document.getElementById("exist").classList.replace("d-block", "d-none")
            else {
                document.getElementById("valide").classList.replace("d-none", "d-block")
                usersData.push(data)
                localStorage.setItem("Data", JSON.stringify(usersData))
                document.getElementById("congrats").classList.replace("d-block", "d-none")
            }
        }
        else {
            document.getElementById("validp").classList.replace("d-none", "d-block")
        }
    }
    else {
        document.getElementById("valide").classList.replace("d-none", "d-block")
    }
}