/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("dropbtn").style.top="60px";
    
  } else {
    
   document.getElementById("dropbtn").style.top="-60px";
  }
  prevScrollpos = currentScrollPos;
} 

var btn1=document.getElementById("getBtn");
if(btn1){
  btn1.addEventListener("click", function() {
    this.style.backgroundColor = "red";
  });
}


function loadDoc()
{
  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200)
    {
      console.log("state change to 4 and ok");
      document.getElementById("content").innerHTML=this.responseText;

    }
  };
  xhttp.open("GET","prgm1.html",true);
  xhttp.send();


}

function closeAjax()
{
  var d=document.getElementById("ajaxContent").innerHTML="";
}