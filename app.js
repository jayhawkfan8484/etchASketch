const GRID_SIZE = 576;
let numberOfRows = 16;
let numberofColumns = 16;

const main = document.querySelector('.main-container');
main.addEventListener('mouseover', (e) => {
  if(e.target.className === 'box') {
    e.target.style.backgroundColor = 'red';
  }
})


function createGrid(row, column) {
  const main = document.querySelector('.main-container');
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