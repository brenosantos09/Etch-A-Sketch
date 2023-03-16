'use strict';

const sketchBoard = document.querySelector('#sketch-board');
const clearButton = document.querySelector('#btn-clear');
const colorButton = document.querySelector('#btn-color');
const newGridButton = document.querySelector('#btn-new-grid');
const selectedColor = document.querySelector('#color-picker');

for (let i = 0; i < 256; i++) {
  const gridCells = document.createElement('div');
  gridCells.classList.add('grid-cell');
  sketchBoard.append(gridCells);
}

//generate new grid
newGridButton.addEventListener('click', () => {
  const newGrid = Number(window.prompt('New Grid Size'));
  const newGridSize = newGrid * newGrid;

  if (newGrid < 0 || newGrid > 70) {
    alert('Please enter a value between 0 and 70');
  } else if (newGrid == '' || isNaN(newGrid)) {
    alert('Please enter a valid number for the grid');
  } else {
    sketchBoard.innerHTML = '';
    for (let i = 0; i < newGridSize; i++) {
      const newGridCell = document.createElement('div');
      newGridCell.classList.add('grid-cell');
      sketchBoard.append(newGridCell);
    }
    sketchBoard.style.gridTemplateColumns = `repeat(${newGrid}, 1fr)`;
    sketchBoard.style.gridTemplateRows = `repeat(${newGrid}, 1fr)`;
  }
});
