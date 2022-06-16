const calcBtn = document.querySelector("button");

const firstPoint = document.querySelector(".first-point-details");
const secondPoint = document.querySelector(".second-point-details");

const pointNameA = firstPoint.querySelector("#point-name");
const pointNameB = secondPoint.querySelector("#point-name");

const coordXA = firstPoint.querySelector("#x-coord");
const coordXB = secondPoint.querySelector("#x-coord");

const coordYA = firstPoint.querySelector("#y-coord");
const coordYB = secondPoint.querySelector("#y-coord");

const inputs = document.querySelectorAll("input");
let flag = 0;

function createResult(result, sectionName, unit, fixed) {
  if (flag == 0) {
    const resultInfo = document.createElement("p");
    const section = document.getElementById(sectionName);
    resultInfo.classList.add("result");
    resultInfo.textContent = `${result.toFixed(fixed)} [${unit}]`;
    section.appendChild(resultInfo);
    flag = 1;
  } else {
    document.querySelector(".result").textContent = `${result.toFixed(
      fixed
    )} [${unit}]`;
  }
}

function radiansToGrads(value) {
  const grads = (value * 200) / Math.PI;
  return grads;
}

function calcDistance() {
  const result = Math.sqrt(
    Math.pow(coordXB.value - coordXA.value, 2) +
      Math.pow(coordYB.value - coordYA.value, 2)
  );
  createResult(result, "distance", "M", 2);
}

function calcAzimuth() {
  const deltaX = coordXB.value - coordXA.value;
  const deltaY = coordYB.value - coordYA.value;
  let result;

  const phi = Math.abs(radiansToGrads(Math.atan(deltaY / deltaX)));

  if (deltaY >= 0 && deltaX >= 0) {
    result = phi;
  } else if (deltaY >= 0 && deltaX <= 0) {
    result = 200 - phi;
  } else if (deltaY <= 0 && deltaX <= 0) {
    result = 200 + phi;
  } else if (deltaY <= 0 && deltaX >= 0) {
    result = 400 - phi;
  }
  createResult(result, "azimuth", "G", 4);
}

calcBtn.addEventListener("click", () => {
  for (let input of inputs) {
    if (input.value === "") {
      alert("Proszę uzupełnić wszystkie pola!");
      return;
    }
  }
  if (calcBtn.id == "distance-btn") {
    calcDistance();
  } else if (calcBtn.id == "azimuth") {
    calcAzimuth();
  }
});
