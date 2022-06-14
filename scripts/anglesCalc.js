const input = document.getElementById("angle");
const anglesDetails = document.querySelector(".angles-details");
const calcBtn = document.getElementById("calc-btn");
let flag = 0;

function degreesToRadians(value) {
  const radians = (value * Math.PI) / 180;
  return radians;
}

function radiansToDegrees(value) {
  const degrees = (value * 360) / (2 * Math.PI);
  return degrees;
}

function degreesToGrads(value) {
  const grads = (value * 400) / 360;
  return grads;
}

function gradsToDegrees(value) {
  const degrees = (value * 360) / 400;
  return degrees;
}

function gradsToRadians(value) {
  const radians = (value * 2 * Math.PI) / 400;
  return radians;
}

function radiansToGrads(value) {
  const grads = (value * 200) / Math.PI;
  return grads;
}

function createResult(result) {
  if (flag == 0) {
    const resultInfo = document.createElement("p");
    resultInfo.classList.add("result");
    resultInfo.textContent = result;
    anglesDetails.appendChild(resultInfo);
    flag = 1;
  } else {
    document.querySelector(".result").textContent = result;
  }
}

function renderResult() {
  const selectFrom = document.getElementById("calc-from").value;
  const selectTo = document.getElementById("calc-to").value;
  let result;
  if (selectFrom == "degrees" && selectTo == "radians") {
    result = degreesToRadians(input.value);
  } else if (selectFrom == "radians" && selectTo == "degrees") {
    result = radiansToDegrees(input.value);
  } else if (selectFrom == "degrees" && selectTo == "grads") {
    result = degreesToGrads(input.value);
  } else if (selectFrom == "grads" && selectTo == "degrees") {
    result = gradsToDegrees(input.value);
  } else if (selectFrom == "grads" && selectTo == "radians") {
    result = gradsToRadians(input.value);
  } else if (selectFrom == "radians" && selectTo == "grads") {
    result = radiansToGrads(input.value);
  } else if (selectFrom == selectTo) {
    alert("Nie możesz przekonwertować tych samych miar!");
  }
  createResult(result);
}

calcBtn.addEventListener("click", renderResult);
