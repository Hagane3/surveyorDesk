const addNewPointBtn = document.getElementById("add-point-btn");
let pointsBase = [];
const inputs = document.querySelectorAll("input");

function createNewPoint() {
  let newPointName = document.getElementById("point-name");
  let newPointCoordX = document.getElementById("coord-x");
  let newPointCoordY = document.getElementById("coord-y");
  const newPoint = {
    name: newPointName.value,
    coordX: newPointCoordX.value.replace(",", "."),
    coordY: newPointCoordY.value.replace(",", "."),
  };
  newPointName.value = "";
  newPointCoordX.value = "";
  newPointCoordY.value = "";

  return newPoint;
}

function addNewPoint(event) {
  event.preventDefault();
  for (let input of inputs) {
    if (input.value === "") {
      alert("Proszę uzupełnić wszystkie pola!");
      return;
    }
  }
  if (window.sessionStorage.getItem("pointbase")) {
    pointsBase = JSON.parse(window.sessionStorage.getItem("pointbase"));
    const newPoint = createNewPoint();
    if (pointsBase.filter((e) => e.name === newPoint.name).length > 0) {
      alert("Dany punkt istnieje w bazie!");
      return;
    } else {
      console.log(newPoint);
      pointsBase.push(newPoint);
      window.sessionStorage.setItem("pointbase", JSON.stringify(pointsBase));
      console.log(JSON.parse(window.sessionStorage.getItem("pointbase")));
      alert(`Punkt o nazwie ${newPoint.name} został dodany do bazy.`);
    }
  } else {
    const newPoint = createNewPoint();
    pointsBase.push(newPoint);
    window.sessionStorage.setItem("pointbase", JSON.stringify(pointsBase));
    console.log(JSON.parse(window.sessionStorage.getItem("pointbase")));
    alert(`Punkt o nazwie ${newPoint.name} został dodany do bazy.`);
  }
}

addNewPointBtn.addEventListener("click", addNewPoint);
