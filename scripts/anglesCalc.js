const input = document.getElementById("angle");
const anglesDetails = document.querySelector(".angles-details");
const calcBtn = document.getElementById("calc-btn");
let flag = 0;

function degreesToRadians(value) {
  const radians = (value * Math.PI) / 180;
  return radians;
}

function radiansToDegrees(value) {
  const radians = (value * 360) / (2 * Math.PI);
  return radians;
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
  if (selectFrom == "degrees" && selectTo == "radians") {
    const result = degreesToRadians(input.value);
    createResult(result);
  } else if (selectFrom == "radians" && selectTo == "degrees") {
    const result = radiansToDegrees(input.value);
    createResult(result);
  } else if (
    (selectFrom == "radians" && selectTo == "radians") ||
    (selectFrom == "degrees" && selectTo == "degrees") ||
    (selectFrom == "grads" && selectTo == "grads")
  ) {
    alert("Nie możesz przekonwertować tych samych miar!");
  }
}

calcBtn.addEventListener("click", renderResult);

// POZOSTAŁO DODAĆ RESZTĘ KALKULACJI!!!!
