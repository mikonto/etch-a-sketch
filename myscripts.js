
let gridSize = 256;
for (let i = 0; i < gridSize; i++) {
    let tag = document.createElement("div");
    tag.id = i;
    tag.className = "gridbox";
    grid.append(tag);

}

document.querySelectorAll('.gridbox').forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.classList.add("hover");
    })
  })