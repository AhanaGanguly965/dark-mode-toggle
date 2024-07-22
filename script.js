const el=document.querySelector(".input");
const bodyel=document.querySelector("body")
el.checked=true;
function updateBody(){
    if(el.checked){
        bodyel.style.background="black";
    }
    else{
        bodyel.style.background="white";
    }
}
updateBody();
el.addEventListener("input",()=>{
    updateBody();
})
