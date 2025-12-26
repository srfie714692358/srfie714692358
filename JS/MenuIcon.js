function HiddeShowMenu() {
    var Menu = document.getElementById("Menu");
    if (Menu.style.visibility === "visible") {
        Menu.style.visibility = "hidden";
        Menu.style.opacity = 0;
    } else {
        Menu.style.visibility = "visible";
        Menu.style.opacity = 1;
    }
};

var CheckWindow = setInterval(function (){
    if (window.innerWidth > 570){
        document.getElementById("MenuIcon").style.display = "none";
        var Menu = document.getElementById("Menu");
        Menu.style.visibility = "visible";
        Menu.style.opacity = 1;
    }else{
        if (document.getElementById("MenuIcon").style.display === "none"){
            var Menu = document.getElementById("Menu");
            Menu.style.visibility = "hidden";
            Menu.style.opacity = 0;
        };
        document.getElementById("MenuIcon").style.display = "block";
    };
}, 100)
