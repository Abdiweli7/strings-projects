const textElem = document.getElementById("text");
const counterElem = document.getElementById("counter")


function UpdateCounter(){
   let count = textElem.value.length;
 counter.textContent = count;
 
  
    
   
}

textElem.addEventListener("input", UpdateCounter)