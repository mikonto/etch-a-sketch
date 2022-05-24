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
        container.append(horizontalCell);
        
        for (let j = 0; j < verticalCells; j++) { // create vertical cells
            let verticalCell = document.createElement("div");
            verticalCell.className = "vertical-cell";
            horizontalCell.append(verticalCell);
        }
    }
    
    document.querySelectorAll('.vertical-cell').forEach(item => { // change color of the vertical cell when hovering with mouse
    item.addEventListener('mouseover', event => {
        
    // UNCOMMENT ONE OF THESE   
        
        // 1. adds color into cells by adding .hover-class
    // item.classList.add("hover"); 
    
        // 2. adds random color
    // item.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
    
       // 3. adds 10% opacity with each mouseover
    let opacity = Number(event.target.getAttribute('data-opacity')); 
    if(opacity < 1) {
        opacity += 0.1;
        event.target.setAttribute('data-opacity', opacity);
    }
    event.target.style.backgroundColor = `rgb(0,0,0,${opacity})`;
    
    })
    })    
}

    





