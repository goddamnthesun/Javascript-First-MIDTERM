// sum function to sum all the values

function sum(accumilator, currentValue) {
  return accumilator + currentValue;
}

function d4() {
  // picks selected amount, runs according math.random that many times and than sums.

  let amountd4 = document.getElementById("amountd4").value;

  amountd4 = Number(amountd4);

  let bonusd4 = document.getElementById("bonusd4").value;

  bonusd4 = Number(bonusd4);

  let resultd4 = document.getElementById("resultd4");

  let arrayResult = [];

  for (let i = 0; i < amountd4; i++) {
    let randomd4 = Math.floor(Math.random() * 4 + 1);
    arrayResult.push(randomd4);
  }

  sumResult = arrayResult.reduce(sum);

  // if bonus is negative or positive, results display accordingly

  if (bonusd4 >= 0) {
    resultd4.textContent = `${amountd4}d4 = ${arrayResult.join(
      " + "
    )} + ${bonusd4} =${sumResult + bonusd4} `;
  } else {
    resultd4.textContent = `${amountd4}d4 = ${arrayResult.join(
      " + "
    )} - ${Math.abs(bonusd4)} =${sumResult + bonusd4} `;
  }
}

function d6() {
  let amountd6 = document.getElementById("amountd6").value;

  amountd6 = Number(amountd6);

  let bonusd6 = document.getElementById("bonusd6").value;

  bonusd6 = Number(bonusd6);

  let resultd6 = document.getElementById("resultd6");

  let arrayResult = [];

  for (let i = 0; i < amountd6; i++) {
    let randomd6 = Math.floor(Math.random() * 6 + 1);
    arrayResult.push(randomd6);
  }

  sumResult = arrayResult.reduce(sum);

  if (bonusd6 >= 0) {
    resultd6.textContent = `${amountd6}d6 = ${arrayResult.join(
      " + "
    )} + ${bonusd6} =${sumResult + bonusd6} `;
  } else {
    resultd6.textContent = `${amountd6}d6 = ${arrayResult.join(
      " + "
    )} - ${Math.abs(bonusd6)} =${sumResult + bonusd6} `;
  }
}

function d8() {
  let amountd8 = document.getElementById("amountd8").value;

  amountd8 = Number(amountd8);

  let bonusd8 = document.getElementById("bonusd8").value;

  bonusd8 = Number(bonusd8);

  let resultd8 = document.getElementById("resultd8");

  let arrayResult = [];

  for (let i = 0; i < amountd8; i++) {
    let randomd8 = Math.floor(Math.random() * 8 + 1);
    arrayResult.push(randomd8);
  }

  sumResult = arrayResult.reduce(sum);

  if (bonusd8 >= 0) {
    resultd8.textContent = `${amountd8}d8 = ${arrayResult.join(
      " + "
    )} + ${bonusd8} =${sumResult + bonusd8} `;
  } else {
    resultd8.textContent = `${amountd8}d8 = ${arrayResult.join(
      " + "
    )} - ${Math.abs(bonusd8)} =${sumResult + bonusd8} `;
  }
}

function d10() {
  let amountd10 = document.getElementById("amountd10").value;

  amountd10 = Number(amountd10);

  let bonusd10 = document.getElementById("bonusd10").value;

  bonusd10 = Number(bonusd10);

  let resultd10 = document.getElementById("resultd10");

  let arrayResult = [];

  for (let i = 0; i < amountd10; i++) {
    let randomd10 = Math.floor(Math.random() * 10 + 1);
    arrayResult.push(randomd10);
  }

  sumResult = arrayResult.reduce(sum);

  if (bonusd10 >= 0) {
    resultd10.textContent = `${amountd10}d10 = ${arrayResult.join(
      " + "
    )} + ${bonusd10} =${sumResult + bonusd10} `;
  } else {
    resultd10.textContent = `${amountd10}d10 = ${arrayResult.join(
      " + "
    )} - ${Math.abs(bonusd10)} =${sumResult + bonusd10} `;
  }
}

function d12() {
  let amountd12 = document.getElementById("amountd12").value;

  amountd12 = Number(amountd12);

  let bonusd12 = document.getElementById("bonusd12").value;

  bonusd12 = Number(bonusd12);

  let resultd12 = document.getElementById("resultd12");

  let arrayResult = [];

  for (let i = 0; i < amountd12; i++) {
    let randomd12 = Math.floor(Math.random() * 12 + 1);
    arrayResult.push(randomd12);
  }

  sumResult = arrayResult.reduce(sum);

  if (bonusd12 >= 0) {
    resultd12.textContent = `${amountd12}d12 = ${arrayResult.join(
      " + "
    )} + ${bonusd12} =${sumResult + bonusd12} `;
  } else {
    resultd12.textContent = `${amountd12}d12 = ${arrayResult.join(
      " + "
    )} - ${Math.abs(bonusd12)} =${sumResult + bonusd12} `;
  }
}

function d20() {
  let amountd20 = document.getElementById("amountd20").value;

  amountd20 = Number(amountd20);

  let bonusd20 = document.getElementById("bonusd20").value;

  bonusd20 = Number(bonusd20);

  let resultd20 = document.getElementById("resultd20");

  let arrayResult = [];

  for (let i = 0; i < amountd20; i++) {
    let randomd20 = Math.floor(Math.random() * 20 + 1);
    arrayResult.push(randomd20);
  }

  sumResult = arrayResult.reduce(sum);

  if (bonusd20 >= 0) {
    resultd20.textContent = `${amountd20}d20 = ${arrayResult.join(
      " + "
    )} + ${bonusd20} =${sumResult + bonusd20} `;
  } else {
    resultd20.textContent = `${amountd20}d20 = ${arrayResult.join(
      " + "
    )} - ${Math.abs(bonusd20)} =${sumResult + bonusd20} `;
  }
}

function d100() {
  let amountd100 = document.getElementById("amountd100").value;

  amountd100 = Number(amountd100);

  let bonusd100 = document.getElementById("bonusd100").value;

  bonusd100 = Number(bonusd100);

  let resultd100 = document.getElementById("resultd100");

  let arrayResult = [];

  for (let i = 0; i < amountd100; i++) {
    let randomd100 = Math.floor(Math.random() * 100 + 1);
    arrayResult.push(randomd100);
  }

  sumResult = arrayResult.reduce(sum);

  if (bonusd100 >= 0) {
    resultd100.textContent = `${amountd100}d100 = ${arrayResult.join(
      " + "
    )} + ${bonusd100} =${sumResult + bonusd100} `;
  } else {
    resultd100.textContent = `${amountd100}d100 = ${arrayResult.join(
      " + "
    )} - ${Math.abs(bonusd100)} =${sumResult + bonusd100} `;
  }
}
