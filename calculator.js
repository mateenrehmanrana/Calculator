let currentInput="";
let currentOperation="";
let previousInput="";

   function appendToDisplay(number) {
      currentInput += value=number;
      document.querySelector('#display').value = `${previousInput} ${currentOperation} ${currentInput}`;
   }
   function appendOperation(operation) {
      if (currentInput ==="")return; 
      if (currentInput !=="") {
         calculate();
      }
      currentOperation = operation;
      previousInput = currentInput;
      currentInput = '';
      document.querySelector('#display').value = `${previousInput} ${currentOperation}`;
   }
   function calculate() {
      if (previousInput ==="" || currentInput ==="") return;
      let result;
      let prev = parseFloat(previousInput);
      let current = parseFloat(currentInput);

      switch (currentOperation) {
         case '+':
            result = prev + current;
               break;
         case '-':
            result = prev - current;
               break;
         case '*':
            result = prev * current;
               break;
         case '/':
            if (current === 0) {
               alert("Cannot divide by zero");
               return;
            }
            result = prev / current;
            break;
         default:
            alert("Invalid operation");
            return;
      }

      currentInput = result.toString();
      currentOperation = "";
      previousInput = "";
      document.querySelector('#display').value = currentInput;
   }
   function clearDisplay() {
      currentInput = '';
      previousInput = '';
      currentOperation = '';
      document.querySelector('#display').value = '0';
   }
   function backspace() {
      currentInput = currentInput.slice(0, -1);
      document.querySelector('#display').value = `${previousInput} ${currentOperation} ${currentInput}`;
   }