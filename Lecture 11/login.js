let email = document.getElementById("email");
let password = document.getElementById("password");
let logIn = document.getElementById("login");
let usersData = []
if (localStorage.getItem("userinfo")) {
    usersData = JSON.parse(localStorage.getItem("userinfo"))
}
logIn.addEventListener('click', log)

function welcome(name) {
    let user = {
        name: name,
    }
    localStorage.setItem("currentUser", JSON.stringify(user))
    window.location.href = "welcome.html"
}
function log() {
    let newUser = usersData.find((item) => {
        return item.email == email.value
    })
    if (newUser) {
        if (newUser.password == password.value) {
            welcome(newUser.name)
        }
        else {
            alert("wrong password")
        }
    }
    else {
        alert("user not found")
    }
}



