
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        // eval function takes information, evaluates it, then gives a result. Kind of like a mini calculator.
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

/* JS css code sourced from Bro Code Youtube Channel https://www.youtube.com/watch?v=I5kj-YsmWjM and Angel Bel in virtual events study group*/