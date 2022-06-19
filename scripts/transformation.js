const transformBtn = document.getElementById("calc-btn");
const coordX = document.getElementById("coordX");
const coordY = document.getElementById("coordY");
const zoneChoice = document.getElementById("calc-from");

let flag = 0;

function createResult(result) {
  if (flag == 0) {
    const resultInfo = document.createElement("p");
    const section = document.querySelector(".transformation-details");
    resultInfo.classList.add("result");
    resultInfo.textContent = `B:  ${result.y}, L:  ${result.x}`;
    section.appendChild(resultInfo);
    flag = 1;
  } else {
    document.querySelector(
      ".result"
    ).textContent = `B:  ${result.y}, L:  ${result.x}`;
  }
}

async function getCOORDS() {
  if (coordX.value === "" || coordY.value === "") {
    alert("Pola nie mogą być puste!");
  } else {
    try {
      await fetch(
        `https://epsg.io/trans?x=${coordY.value}&y=${coordX.value}&z=0&s_srs=2180&t_srs=4326`
      )
        .then((response) => response.json())
        .then((data) => {
          createResult(data);
        });
    } catch (err) {
      alert(err);
    }
  }
}

transformBtn.addEventListener("click", getCOORDS);
