/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("drop").style.top = "0";
    document.getElementById("dropbuttons").style.top="82px";
    
  } else {
    document.getElementById("drop").style.top = "-82px";
    document.getElementById("dropbuttons").style.top="0";
  }
  prevScrollpos = currentScrollPos;
} 