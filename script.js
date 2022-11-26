var decBtn = document.getElementById('decrement');
var incBtn = document.getElementById('increment');
var clrBtn = document.getElementById('clear');
var alertText = document.getElementById("alert-text");
var counterElement = document.getElementById('count');


var counter = counterElement.innerText;


function decrement(){
  alertText.innerText = "";
    if (counter==0){
        alertText.innerText = "Error : Cannot go below 0";
    }
    else{
      counter--;
      counterElement.innerText = counter;
    }
}
function increment(){
  alertText.innerText = "";
  counter++;
  counterElement.innerText = counter;
    
}
function clear(){
  alertText.innerText = "";
  counter = 0;
  console.log(counter);
  counterElement.innerText = counter;
}

incBtn.onclick = increment;
decBtn.onclick = decrement;
clrBtn.onclick = clear;
