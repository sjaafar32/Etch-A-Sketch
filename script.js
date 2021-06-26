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
        
        let y = randomColor();
        let z = 'rgb(' + y + ')';
        console.log(y);
        console.log(z);

        cell.style.setProperty('--cell-color', z); 
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
    createGrid(x*x);
});

function randomColor() {
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);

    let array = [num1, num2, num3];

    return array;
}