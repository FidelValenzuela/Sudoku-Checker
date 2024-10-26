// FREEZE CODE BEGIN
// Puzzles to use to test your functions
//puzzle
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

//puzzle 2
let puzzleTwo = [[ 8,9,5,   7,4,2,   1,3,6 ],
                 [ 8,7,1,   9,6,3,   4,8,5 ],
                 [ 4,6,3,   5,8,1,   7,9,2 ],
                 [ 9,3,4,   6,1,7,   2,5,8 ],
                 [ 5,1,7,   2,3,8,   9,6,4 ],
                 [ 6,8,2,   4,5,9,   3,7,1 ],
                 [ 1,5,9,   8,7,4,   6,2,3 ],
                 [ 7,4,6,   3,2,5,   8,1,9 ],
                 [ 3,2,8,   1,9,6,   5,4,7 ]];
// FREEZE CODE END

function getRow(puzzle, row) {
  return puzzle[row]

}

function getColumn(puzzle, col) {

    // This is an empty array to hold the values from the for loop
    const column = [];

    // Loops through each row in the puzzle
    for (let i = 0; i < puzzle.length; i++) {
        // Push the value at 'col' from each row into the column array
        column.push(puzzle[i][col]);
    }
    // Returns the array containing the values of the specified column
    return column;
}

function getSection(puzzle, x, y) {

// Calculates the starting row and column for the 3x3 sub-grid
    var startRow = y * 3; 
    var startCol = x * 3;
    
    // This empty array will store the numbers from the sub-grid
    const section = [];
    
    // Loops through the rows of the 3x3 sub-grid
    for (var i = startRow; i < startRow + 3; i++) {
        // Loops through the columns of the 3x3 sub-grid
        for (var j = startCol; j < startCol + 3; j++) {
            // Adds each number to the section array
            section.push(puzzle[i][j]);
        }
    }
    return section;
}

function includes1To9(arr) {

  // Checks if array is 9 elements since Sodoku sections include 9 elements
  if (arr.length !== 9) 
    return false;

  // Sorts a copy of the array in numeric order
  let sortedArr = arr.slice().sort((a, b) => a - b);

  // Compares the sorted array to [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 0; i < 9; i++) {
    if (sortedArr[i] !== i + 1) {
      return false;
    }
  }

  return true;

}

console.log(includes1To9([1, 2, 3, 4, 5, 6, 7, 8, 9])); // true
console.log(includes1To9([1, 1, 2, 3, 4, 5, 6, 7, 8])); // false




function sudokuIsValid(puzzle) {
  
  //checkRows
 for (let row = 0; row < 9; row++) {
        if (!includes1To9(getRow(puzzle, row))) {
            return false;
        }
    }

  //checkColumns
 for (let col = 0; col < 9; col++) {
        if (!includes1To9(getColumn(puzzle, col))) {
            return false;
        }
    }
  //checkSection
 for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (!includes1To9(getSection(puzzle, x, y))) {
                return false;
            }
        }
    }

// If all checks passed, the puzzle is valid
    return true;
}

// Example usage:
console.log(sudokuIsValid(puzzle));    // true
console.log(sudokuIsValid(puzzleTwo)); // false (because puzzleTwo has an invalid row)

// YOU CAN console.log THESE RESULTS TO SEE THE OUTPUT
console.log(getRow(puzzle, 8));
console.log(getRow(puzzle, 0));
console.log(getColumn(puzzle, 0));
console.log(getColumn(puzzle, 8));
console.log(getSection(puzzle, 0, 0));
console.log(getSection(puzzle, 1,0));

// FREEZE CODE BEGIN
module.exports = {
  getRow,
  getColumn,
  getSection,
  includes1To9,
  sudokuIsValid,
  puzzle,
  puzzleTwo
};
// FREEZE CODE END
