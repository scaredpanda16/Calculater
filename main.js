 

 const display = document.getElementById("display");


 function appendToDisplay(input){
    display.value += input;
 }


 function ClearDisplay(){
    display.value ="";
 }


 function Calclulate(){
    
    try{
        display.value = eval(display.value);

    }
    catch{
        display.value = "Error"
    }


 }