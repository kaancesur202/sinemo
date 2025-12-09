
let isLoggedIn = false;


document.getElementById("profileLink").addEventListener("click", function (e){
    e.preventDefault();
    
    if(isLoggedIn){
        window.location.href = "profile.html";  
    } else {
        window.location.href = "login.html"; 
    }
});

function mesaj_gönder(){
    alert("Mesaj gönderildi");
}