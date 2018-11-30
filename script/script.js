let LCD = document.querySelector("#LCD");
let numberOne;
let numberTwo;
let operatorChoice;
let sumTotal;
let equation = [];
//event listeners for numbers

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // adding logic here

    if (button.classList.contains("numbers") && !numberOne) {
      
      equation.push(button.id);
      LCD.innerHTML = button.id
      numberOne = parseInt(LCD.innerHTML);
      
      

    } else if (button.classList.contains("numbers") && operatorChoice) {

      
      equation.push(button.id);
      LCD.innerHTML = equation.join("");
      numberTwo = parseInt(equation.join(""));
    
    

    } else if (button.classList.contains("numbers") && numberOne ){
    
      equation.push(button.id);
      LCD.innerHTML = equation.join("")
      numberOne = parseInt(equation.join(""));
      
      
    } else if (button.classList.contains("operator")) {

      if (numberOne && operatorChoice) {
        equation =[];
        calculate(numberOne,operatorChoice,numberTwo)
        numberOne = sumTotal;
        numberTwo = "";
        operatorChoice = operatorChoice = button.id;
        LCD.innerHTML = "";
        
      } else {
        
        operatorChoice = button.id;
        LCD.innerHTML = "";
        equation = [];
      }
    } else if (button.classList.contains("equals")) {
      
      equation =[];
      calculate(numberOne, operatorChoice, numberTwo)
     
    }


  });
});

//event listeners for clear

const minusplus = document.querySelectorAll('#minusplus');
minusplus.forEach((number) => {
  number.addEventListener('click', (e) => {
    plusMinus();
  });
});


const clears = document.querySelectorAll('#clear');
clears.forEach((clear) => {
  clear.addEventListener('click', (e) => {
    clearAll();
  });
});




function plusMinus() {
  let char = LCD.innerHTML.charAt(0);
  if(char != "-") {
    
    LCD.innerHTML = "-" + LCD.innerHTML;
    equation.push(LCD.innerHTML)
    
  } else {
   
    LCD.innerHTML = LCD.innerHTML.substr(1);
    equation.push(LCD.innerHTML)
    
  }
}

function addPeriod() {
  
  LCD.innerHTML = LCD.innerHTML + ".";
}

function clearAll() {
  LCD.innerHTML = "";
  equation = [];
  numberOne = "";
  numberTwo = "";
  operatorChoice = "";
  sumTotal = "";

}

function calculate(n1, operatorChoice, n2) {
  
 
  if (operatorChoice === "1") {
    sumTotal = n1 / n2;
  } else if (operatorChoice === "2") {
    sumTotal = n1 * n2;
  } else if (operatorChoice === "3") {
    sumTotal = n1 - n2;
  } else if (operatorChoice === "4") {
    sumTotal = n1 + n2;
  } 
  
  LCD.innerHTML = sumTotal;
}
