const main = document.getElementById('main');
const container = document.getElementsByClassName('container')[0];

const reset = document.createElement('button');
reset.classList.add('button');
reset.innerText = 'RESET';
main.appendChild(reset);

let numOfCells;

function input(){
    numOfCells = prompt('Enter the number (between 1 and 30) of rows and columns you would like');

    if(numOfCells<1 || numOfCells>30){ alert('Number must be between 1 and 30'); input();};

    let cellSize = (487.5-(0.5*(numOfCells-1)))/numOfCells + 'px';
    
    grid.style.setProperty('--input', numOfCells);
    grid.style.setProperty('--cell-size', cellSize);
    grid.classList.add('grid');
    container.appendChild(grid);
    return numOfCells;
}

const grid = document.createElement('div');

input();

createGrid(numOfCells*numOfCells);

function createGrid(number) {
    

    for(let i = 1; i <= number; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        
        grid.appendChild(cell);

        cell.style.setProperty('--cell-color', 'rgb(' + randomColor() + ')'); 
        // document.documentElement.style.setProperty('--cell-color', 'red');
        cell.addEventListener('mouseover', () => {
           cell.classList.add('cell-color');
        
        })
    };
}

reset.addEventListener('click', () => {
    const gridArray = Array.from(grid.childNodes);
    gridArray.forEach((element) => {
        grid.removeChild(element);
    });
    input();
    createGrid(numOfCells*numOfCells);
});

function randomColor() {
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);

    let array = [num1, num2, num3];

    return array;
}