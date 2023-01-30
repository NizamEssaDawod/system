var samiItem= document.getElementById("menu").getElementsByTagName("li");
var ss=document.getElementById("text");
var ms=document.getElementById("menu");
var counter=1;
// samiItem[0].innerHTML="Hello World";
// samiItem[1].innerHTML="Hello World";
// samiItem[2].innerHTML="Hello World";
// samiItem[3].innerHTML="Hello World";
// for (i= 0;i<samiItem.length;i++){
//     samiItem[i].addEventListener("click",selc);
// }
ms.addEventListener("click",sel)
function sel(n){
    if (n.target.nodeName == "LI") {
            ss.innerHTML=n.target.innerHTML;
            for( i=0;i<samiItem.length;i++){
            samiItem[i].classList.remove("selected");
            }
            n.target.classList.add("selected");
    };
}  

var q=document.getElementById("zar");
q.addEventListener("click",dsds);
function dsds(){
    ms.innerHTML+="<li> ks ks ks "+ counter+ "</li>";
    counter++;
  
}
