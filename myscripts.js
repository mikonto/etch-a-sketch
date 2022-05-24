document.getElementById("btn").addEventListener("click", newGrid); // create a new grid when pressing the button

function newGrid(){ // create a new grid
    let horizontalCells = prompt("How many horizontal cells?"); // create horizontal cells
    while (horizontalCells > 100) {  
        horizontalCells = prompt("Please enter a number between 1 and 100!"); 
    } 
    
    let verticalCells = prompt("How many vertical cells?"); // create vertical cells
    while (verticalCells > 100) {  
        verticalCells = prompt("Please enter a number between 1 and 100!");  
    } 
    
    let container = document.getElementById("container"); // remove the cells from the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    for (let i = 0; i < horizontalCells; i++) { // create horizontal cells
        let horizontalCell = document.createElement("div");
        horizontalCell.className = "horizontal-cell";
        // horizontalCell.id = i;
        container.append(horizontalCell);
    
        for (let j = 0; j < verticalCells; j++) { // create vertical cells
            let verticalCell = document.createElement("div");
            // verticalCell.id = `h${i}w${j}`;
            verticalCell.className = "vertical-cell";
            horizontalCell.append(verticalCell);
        }
    }
    
    document.querySelectorAll('.vertical-cell').forEach(item => { // change color of the vertical cell when hovering with mouse
        item.addEventListener('mouseenter', event => {
            item.classList.add("hover"); // adds color by adding .hover-class
            // item.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16); // adds random color
        })
      })
}


