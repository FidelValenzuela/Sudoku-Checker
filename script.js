document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('sudokuGrid');

    // Dynamically generate a 9x9 grid
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('input');
            cell.setAttribute('type', 'number');
            cell.setAttribute('min', '1');
            cell.setAttribute('max', '9');
            cell.classList.add('cell', 'bg-white', 'border', 'border-gray-300', 'text-center');
            grid.appendChild(cell);
        }
    }
});

// Update a specific row
function updateRow() {
    const rowIndex = parseInt(document.getElementById('rowSelect').value);
    const rowInput = document.getElementById('rowInput').value;

    if (rowInput.length !== 9 || !/^\d+$/.test(rowInput)) {
        alert("Please enter exactly 9 numbers (1-9).");
        return;
    }

    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < 9; i++) {
        cells[rowIndex * 9 + i].value = rowInput[i];
    }
}

// Update all rows
function updateAllRows() {
    const allRowsInput = document.getElementById('allRowsInput').value;

    if (allRowsInput.length !== 81 || !/^\d+$/.test(allRowsInput)) {
        alert("Please enter exactly 81 numbers (1-9).");
        return;
    }

    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < 81; i++) {
        cells[i].value = allRowsInput[i];
    }
}

// Validate Sudoku
function validateSudoku() {
    const puzzle = getPuzzle();
    const resultElement = document.getElementById('result');
    const validateButton = document.getElementById('validateButton');

    // Reset button to orange before validating
    validateButton.classList.remove('bg-red-500', 'bg-green-500');
    validateButton.classList.add('bg-orange-500', 'hover:bg-orange-600');
    validateButton.style.backgroundColor = "";
    resultElement.textContent = "";

    if (sudokuIsValid(puzzle)) {
        resultElement.textContent = "The puzzle is valid!";
        resultElement.style.color = "green";
        validateButton.classList.remove('bg-orange-500', 'hover:bg-orange-600');
        validateButton.classList.add('bg-green-500');
        validateButton.style.backgroundColor = "green";
        showConfetti();
    } else {
        resultElement.textContent = "The puzzle is invalid.";
        resultElement.style.color = "red";
        validateButton.classList.remove('bg-orange-500', 'hover:bg-orange-600');
        validateButton.classList.add('bg-red-500');
        validateButton.style.backgroundColor = "red";
    }
}

// Confetti effect
function showConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const confetti = new ConfettiGenerator({ target: canvas });
    confetti.render();

    setTimeout(() => {
        confetti.clear();
    }, 5000);
}

// Utility functions
function getPuzzle() {
    const cells = document.querySelectorAll('.cell');
    let puzzle = [];
    let row = [];

    cells.forEach((cell, index) => {
        const value = parseInt(cell.value) || 0;
        row.push(value);

        if ((index + 1) % 9 === 0) {
            puzzle.push(row);
            row = [];
        }
    });

    return puzzle;
}

function includes1To9(arr) {
    if (arr.length !== 9) return false;
    let sortedArr = arr.slice().sort((a, b) => a - b);
    for (let i = 0; i < 9; i++) {
        if (sortedArr[i] !== i + 1) {
            return false;
        }
    }
    return true;
}

function getRow(puzzle, row) {
    return puzzle[row];
}

function getColumn(puzzle, col) {
    return puzzle.map(row => row[col]);
}

function getSection(puzzle, x, y) {
    const startRow = y * 3;
    const startCol = x * 3;
    const section = [];
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            section.push(puzzle[i][j]);
        }
    }
    return section;
}

function sudokuIsValid(puzzle) {
    for (let row = 0; row < 9; row++) {
        if (!includes1To9(getRow(puzzle, row))) return false;
    }
    for (let col = 0; col < 9; col++) {
        if (!includes1To9(getColumn(puzzle, col))) return false;
    }
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (!includes1To9(getSection(puzzle, x, y))) return false;
        }
    }
    return true;
}
