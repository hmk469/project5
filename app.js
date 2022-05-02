let aslide=document.querySelector(".aslide")
let hanburger=document.querySelector(".hanburger")
let closeMenu=document.querySelector("#close")
let close=document.querySelector(".Menu ul")
hanburger.onclick=function(){
    aslide.style.display="block";
}
closeMenu.onclick=function(){
    aslide.style.display="none";
}
