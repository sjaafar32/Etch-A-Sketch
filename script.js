const main = document.getElementById('main');
const container = document.getElementsByClassName('container')[0];

const reset = document.createElement('button');
reset.classList.add('button');
reset.innerText = 'RESET';
main.appendChild(reset);


const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

let x = 16;

createGrid(x*x);

function createGrid(number) {
    for(let i = 1; i <= number; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
        console.log(cell)
        cell.addEventListener('mouseover', () => {
            cell.classList.add('blue');
        })
    };
}

reset.addEventListener('click', () => {
    const gridArray = Array.from(grid.childNodes);
    gridArray.forEach((element) => {
        grid.removeChild(element);
    });
    createGrid(16*16);
});