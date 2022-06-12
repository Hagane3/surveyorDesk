const pointsList = document.getElementById("point-table");

function renderList() {
  const points = JSON.parse(window.sessionStorage.getItem("pointbase"));
  const pointTemplate = document.getElementById("point-template");

  points.forEach((point) => {
    const pointBody = document.importNode(pointTemplate.content, true);
    pointBody.getElementById("point-name").textContent = point.name;
    pointBody.getElementById("coord-x").textContent = point.coordX;
    pointBody.getElementById("coord-y").textContent = point.coordY;
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
