
let horizontalCells = 50;
let verticalCells = 50;

for (let i = 0; i < horizontalCells; i++) {
    let horizontalCell = document.createElement("div");
    horizontalCell.id = i;
    container.append(horizontalCell);

    for (let j = 0; j < verticalCells; j++) {
        let verticalCell = document.createElement("div");
        verticalCell.id = `h${i}w${j}`;
        verticalCell.className = "cell";
        horizontalCell.append(verticalCell);
    }
}

document.querySelectorAll('.cell').forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.classList.add("hover");
    })
  })