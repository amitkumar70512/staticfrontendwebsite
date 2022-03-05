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
btn1.addEventListener("click",()=>{
  console.log("mouse over btn 1");
})

function loadDoc()
{
  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200)
    {
      document.getElementById("content").innerHTML=this.responseText;

    }
  };
  xhttp.open("GET","amit.txt",true);
  xhttp.send();


}