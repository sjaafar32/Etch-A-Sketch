const container = document.getElementsByClassName('container')[0];
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

let x = 5;

createGrid(x*x);

function createGrid(number) {
    for(let i = 1; i <= number; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
        console.log(cell)
    };
}
