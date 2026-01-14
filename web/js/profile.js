const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        window.location.href = "login.html";
    }

    document.getElementById("usernameText").innerText =
        localStorage.getItem("username");

    document.getElementById("logoutBtn").addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.clear();
        window.location.href = "login.html";
});
