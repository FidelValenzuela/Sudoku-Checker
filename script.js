document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('sudokuGrid');
    for (let i = 0; i < 81; i++) {
        const cell = document.createElement('input');
        cell.setAttribute('type', 'number');
        cell.setAttribute('min', '1');
        cell.setAttribute('max', '9');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
});

function getPuzzle() {
    const cells = document.querySelectorAll('.cell');
    let puzzle = [];
    for (let i = 0; i < 9; i++) {
        let row = [];
        for (let j = 0; j < 9; j++) {
            const value = parseInt(cells[i * 9 + j].value) || 0;
            row.push(value);
        }
        puzzle.push(row);
    }
    return puzzle;
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

function validateSudoku() {
    const puzzle = getPuzzle();
    const resultElement = document.getElementById('result');
    if (sudokuIsValid(puzzle)) {
        resultElement.textContent = "The puzzle is valid!";
        resultElement.className = "result valid";
    } else {
        resultElement.textContent = "The puzzle is invalid.";
        resultElement.className = "result invalid";
    }
}
