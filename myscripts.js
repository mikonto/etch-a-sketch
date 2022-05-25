document.getElementById("btn").addEventListener("click", newGrid); // create a new grid when pressing the button

function newGrid(){ // create a new grid
    let cellContainer = prompt("How many horizontal cells?"); // create horizontal cells
    while (cellContainer > 100) {  
        cellContainer = prompt("Please enter a number between 1 and 100!"); 
    } 
    
    let cell = prompt("How many vertical cells?"); // create vertical cells
    while (cell > 100) {  
        cell = prompt("Please enter a number between 1 and 100!");  
    } 
    
    let container = document.getElementById("container"); // remove the cells from the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    for (let i = 0; i < cellContainer; i++) { // create horizontal cells
        let cellContainer = document.createElement("div");
        cellContainer.className = "cell-container";
        container.append(cellContainer);
        
        for (let j = 0; j < cell; j++) { // create vertical cells
            let cell = document.createElement("div");
            cell.className = "cell";
            cellContainer.append(cell);
        }
    }
    
    document.querySelectorAll('.cell').forEach(item => { // change color of the vertical cell when hovering with mouse
    item.addEventListener('mouseover', event => {
        
    // UNCOMMENT ONE OF THESE   
        
        // 1. adds color into cells by adding .hover-class
    // item.classList.add("hover"); 
    
        // 2. adds random color
    item.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
    
       // 3. adds 10% opacity with each mouseover
    // let opacity = Number(event.target.getAttribute('data-opacity')); 
    // if(opacity < 1) {
    //     opacity += 0.1;
    //     event.target.setAttribute('data-opacity', opacity);
    // }
    // event.target.style.backgroundColor = `rgb(0,0,0,${opacity})`;
    
    })
    })    
}

    





