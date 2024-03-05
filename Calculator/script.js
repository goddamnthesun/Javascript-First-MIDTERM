const display = document.getElementById("result");

// pressing on input buttons displays inputs

function displayInput(input) {
  display.value += input;
}

// pressing on "c" button clears the display of all inputs

function clearInputs() {
  display.value = "";
}

// calculates by evaluating the string content

function calculate() {
  display.value = eval(display.value);
}
