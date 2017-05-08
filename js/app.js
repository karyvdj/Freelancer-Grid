var barraNav = document.getElementsByClassName("btn-nav");

document.addEventListener("scroll", function() {
 if(window.scrollY > 2500) {
   cambiarContact ()
 } else if (window.scrollY > 1700) {
   cambiarAbout();
 } else if (window.scrollY > 800) {
   cambiarPortfolio();
 } else {
   devolverNavOriginal();
 }
});
function cambiarPortfolio() {
   barraNav[0].style.background = "#18BC9C ";
   barraNav[1].style.background = "#2c3e50 ";
   barraNav[2].style.background = "#2c3e50 ";
}
function cambiarAbout () {
   barraNav[1].style.background = "#18BC9C ";
   barraNav[0].style.background = "#2c3e50 ";
   barraNav[2].style.background = "#2c3e50 ";
}
function cambiarContact () {
   barraNav[2].style.background = "#18BC9C ";
   barraNav[1].style.background = "#2c3e50 ";
   barraNav[0].style.background = "#2c3e50 ";
}
function devolverNavOriginal() {
   barraNav[0].style.background = "#2c3e50 ";
   barraNav[1].style.background = "#2c3e50 ";
   barraNav[2].style.background = "#2c3e50 ";
}
