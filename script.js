function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "student" && pass === "1234") {
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText = "Invalid Login";
    }
}

