
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
function openImg(src){
    document.getElementById("bigImg").src = src;
    document.getElementById("modal").style.display =" flex";
}
function closeImg(){
    document.getElementById("modal").style.display ="none";
}