const decbtn= document.getElementById("decbtn");
const incbtn= document.getElementById("incbtn");
const resetbtn= document.getElementById("resetbtn");
const countlabel=document.getElementById("countlabel");
let count=0;
decbtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}
incbtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
