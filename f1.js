let count=0;
let refElem=document.getElementById("ref");
function incre(){
    count++;
    refElem.innerText=count;
}
function decre(){
    count--;
    refElem.innerText=count;
}