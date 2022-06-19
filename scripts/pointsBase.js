const pointsList = document.getElementById("point-table");

function renderList() {
  const points = JSON.parse(window.sessionStorage.getItem("pointbase"));
  const pointTemplate = document.getElementById("point-template");

  points.forEach((point) => {
    const pointBody = document.importNode(pointTemplate.content, true);
    pointBody.getElementById("point-name").textContent = point.name;
    const coordX = parseFloat(point.coordX).toFixed(2);
    const coordY = parseFloat(point.coordY).toFixed(2);
    pointBody.getElementById("coord-x").textContent = coordX;
    pointBody.getElementById("coord-y").textContent = coordY;
    pointsList.appendChild(pointBody);
  });
}

if (window.sessionStorage.getItem("pointbase")) {
  renderList();
} else {
  setTimeout(() => {
    alert("Brak punktów w bazie");
  }, 1000);
}
