// Functions
function changeColor(e) {
    this.style.backgroundColor = 'blue';
}

function clearGrid() {
    let n = parseInt(prompt("Enter new grid size"));
    while(n > 100) n = parseInt(prompt("Enter new grid size"));
    const container = document.querySelector('.container');
    const grid = document.querySelector('#grid');
    container.removeChild(grid);
    createGrid(n, n);

}

// Created Grid
let createGrid = (row, col) => {
    const grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    for (let i = 0; i < row; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('rowDiv');
        for (let j = 0; j < col; j++) {
            const colDiv = document.createElement('div');
            colDiv.addEventListener('mouseover', changeColor);
            colDiv.classList.add('colDiv');
            rowDiv.appendChild(colDiv);
        }
        grid.appendChild(rowDiv);
    }
    const container = document.querySelector('.container');
    container.appendChild(grid);
}

createGrid(16, 16);


// Add event listeners
const button = document.querySelector('button');
button.addEventListener('click', clearGrid);






