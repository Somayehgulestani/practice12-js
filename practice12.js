const list = ["HTML", "CSS", "JS"];
const box = document.getElementById("box");
let search =0;

function listsearch( ){
  
  box.innerHTML = list[search];
  search = (search +1)% list.length;
  
} 
listsearch();
setInterval(listsearch, 2000);