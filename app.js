const GRID_SIZE = 576;
let numberOfRows = 16;
let numberofColumns = 16;

const form = document.querySelector('form');
form.addEventListener('click', (e) => {
  if(e.target.id === 'reset') {
    resetGrid();
  }
})

const main = document.querySelector('.app-container');
main.addEventListener('mouseover', (e) => {
  if(e.target.className === 'box') {
    e.target.style.backgroundColor = 'red';
  }
})

function resetGrid(e){
  while(row = document.querySelector('.row-container')){
    main.removeChild(row);
  }

  let inputText = document.querySelector('input[type=number');
  console.log(inputText.value);
  createGrid(inputText.value, inputText.value);
  
}

function createGrid(row, column) {
  console.log('createGrid');
  const main = document.querySelector('.app-container');
  for (let i = 0; i < row; i++) {
    let gridRow = createGridRow(column);
    main.appendChild(gridRow); 
  }
}

function createGridColumn () {
  let gridColumn = document.createElement('div');
  gridColumn.classList.add('box');
  // gridColumn.style.backgroundColor = "red";
  gridColumn.style.width = (`${GRID_SIZE/numberofColumns}px`);
  gridColumn.style.height = (`${GRID_SIZE/numberofColumns}px`);
  return gridColumn;
}

function createGridRow (column) {
  let gridRow = document.createElement('div');
  gridRow.classList.add('row-container');

  for (let i = 0; i < column; i++) {
    gridColumn = createGridColumn();
    gridRow.appendChild(createGridColumn());
  }
  return gridRow;
}

createGrid(numberOfRows, numberofColumns);