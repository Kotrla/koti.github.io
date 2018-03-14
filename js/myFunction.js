function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "txtn") {
        x.className += " responsive";
    } else {
        x.className = "txtn";
    }
}
