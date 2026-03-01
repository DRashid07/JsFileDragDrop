let area=document.querySelector(".area");
let box=document.querySelector(".box");


box.ondragstart=function(){
    console.log("start");
}

box.ondrag=function(){
    console.log("drag olunur");
}

box.ondragend=function(){
    console.log("end");
}

if(box1 in area1){
    return true;
}
area.ondragenter=function(){
    console.log("enter");
}

