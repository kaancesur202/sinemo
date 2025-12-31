document.getElementById("profileLink").addEventListener("click", function (e){
    e.preventDefault();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if(isLoggedIn){
        window.location.href = "profile.html";  
    } else {
        window.location.href = "login.html"; 
    }
});
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    if (username && password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);

        if (remember) {
            localStorage.setItem("remember", "true");
        }

        window.location.href = "profile.html";
    } else {
        alert("Bilgileri giriniz");
    }
});

function mesaj_gönder(){
    alert("Mesaj gönderildi");
}
function openImg(src){
    document.getElementById("bigImg").src = src;
    document.getElementById("modal").style.display =" flex";
}
function closeImg(){
    document.getElementById("modal").style.display ="none";
}