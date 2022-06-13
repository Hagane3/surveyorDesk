const addNewPointBtn = document.getElementById("add-point-btn");
let pointsBase = [];

function createNewPoint() {
  let newPointName = document.getElementById("point-name");
  let newPointCoordX = document.getElementById("coord-x");
  let newPointCoordY = document.getElementById("coord-y");
  const newPoint = {
    name: newPointName.value,
    coordX: newPointCoordX.value,
    coordY: newPointCoordY.value,
  };
  newPointName.value = "";
  newPointCoordX.value = "";
  newPointCoordY.value = "";
  alert(`Punkt o nazwie ${newPoint.name} został dodany do bazy.`);
  return newPoint;
}

function addNewPoint(event) {
  event.preventDefault();
  if (window.sessionStorage.getItem("pointbase")) {
    pointsBase = JSON.parse(window.sessionStorage.getItem("pointbase"));
    const newPoint = createNewPoint();
    pointsBase.push(newPoint);
    window.sessionStorage.setItem("pointbase", JSON.stringify(pointsBase));
    console.log(JSON.parse(window.sessionStorage.getItem("pointbase")));
  } else {
    const newPoint = createNewPoint();
    pointsBase.push(newPoint);
    window.sessionStorage.setItem("pointbase", JSON.stringify(pointsBase));
    console.log(JSON.parse(window.sessionStorage.getItem("pointbase")));
  }
}

addNewPointBtn.addEventListener("click", addNewPoint);
