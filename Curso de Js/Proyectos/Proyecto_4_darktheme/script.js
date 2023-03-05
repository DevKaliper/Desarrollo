const toggle = document.getElementById("toggle");
const body = document.querySelector("body")

function activarDark () {
    body.classList.toggle("active")
}

toggle.addEventListener("click", activarDark)
