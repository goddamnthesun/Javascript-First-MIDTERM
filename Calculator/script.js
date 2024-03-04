const display = document.getElementById("result");

function displayInput(input) {
  display.value += input;
}

function clearInputs() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}
