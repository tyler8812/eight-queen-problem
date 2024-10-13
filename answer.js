/**
 * solve n queen problem
 * @param {number} n // n-queen
 */
var solveNQueens = function (n) {
  let count = { solutionCount: 0 };
  getNQueensResult(n, 0, [], [], count);
};

/**
 * function for recursive
 * @param {number} n // n-queen
 * @param {number} row // current row
 * @param {Array} choices // current board
 * @param {Arrray} solutions // solution array
 * @param {Object} count // solution count
 */
function getNQueensResult(n, row, choices, solutions, count) {
  if (row === n) {
    count.solutionCount += 1;
    processChoices(choices, count.solutionCount);
  } else {
    for (let i = 0; i < n; i++) {
      choices.push(i);
      if (isValid(choices)) {
        getNQueensResult(n, row + 1, choices, solutions, count);
      }
      choices.pop();
    }
  }
}

/**
 * function for checking if it is valid
 * @param {Array} choices // current board
 * @returns {Boolean}
 */
function isValid(choices) {
  const row = choices.length - 1;
  const column = choices[choices.length - 1];

  for (let i = 0; i < choices.length - 1; i++) {
    const currentRow = i;
    const currentCol = choices[i];
    const leftCollisionIndex = currentCol - (row - currentRow);
    const rightCollisionIndex = currentCol + (row - currentRow);

    if (column === currentCol) return false;
    if (column === leftCollisionIndex || column === rightCollisionIndex)
      return false;
  }
  return true;
}

/**
 * log out solution
 * @param {Array} choices // solution board
 * @param {number} count //solution count
 */
function processChoices(choices, count) {
  console.log(`// Solution ${count}`);
  for (let i = 0; i < choices.length; i++) {
    let row = "";
    for (let j = 0; j < choices.length; j++) {
      if (choices[i] === j) row += "Q";
      else row += ".";
    }
    console.log(row);
  }
  console.log("-------");
}

solveNQueens(8);
