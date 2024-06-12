let out = document.getElementById("out")
user = {}
user = JSON.parse(localStorage.getItem("currentUser"))
document.getElementById("hello").innerHTML = `Hello ${user.name}`;
out.addEventListener('click', logout)
function logout() {
    window.location.href = "index.html"
}