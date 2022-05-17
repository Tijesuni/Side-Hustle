function myFunction(){
    var x = document.getElementById("topNav");
    if (x.className === "mainMenu"){
        x.className += " responsive";
    }else{
        x.className = "mainMenu";
    }
}