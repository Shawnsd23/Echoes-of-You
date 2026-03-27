const password = "vento1729";

function checkPassword() {
    const input = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (input === password) {
        localStorage.setItem("access", "granted");
        window.location.href = "home.html";
    } else {
        error.innerText = "Wrong password 😒";
    }
}

// Protect pages
if (window.location.pathname !== "/index.html") {
    if (localStorage.getItem("access") !== "granted") {
        window.location.href = "index.html";
    }
}

// Secret button
function goSecret() {
    alert("You found the hidden part ❤️");
}
