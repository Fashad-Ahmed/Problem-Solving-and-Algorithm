// A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same element.
//  Given a non-empty matrix arr, write a function that returns true if and only if it is a Toeplitz matrix.
//  The matrix can be any dimensions, not necessarily square.

// For example,

// [[1,2,3,4],
//  [5,1,2,3],
//  [6,5,1,2]]
// is a Toeplitz matrix, so we should return true, while

// [[1,2,3,4],
//  [5,1,9,3],
//  [6,5,1,2]]
// isn't a Toeplitz matrix, so we should return false.

function identifyToeplitzMatrix(inputMatrix) {
  let rows = inputMatrix.length;
  let columns = inputMatrix?.[0].length;

  for (let i = 0; i < rows - 1; i++) {
    for (let j = 0; j < columns - 1; j++) {
      // console.log("inputMatrix[i]", inputMatrix[i])
      // console.log("inputMatrix[j]", inputMatrix[j])
      console.log("inputMatrix[i][j]", inputMatrix[i][j], inputMatrix[i + 1][j + 1])

      if (inputMatrix[i][j] !== inputMatrix[i + 1][j + 1]) {
        return false
      }
    }
  }

  return true
}

const matrixOne = [[1, 2, 3, 4],
[5, 1, 2, 3],
[6, 5, 1, 2]]

const matrixTwo = [[1, 2, 3, 4],
[5, 1, 9, 3],
[6, 5, 1, 2]]

console.log('matrixOne', identifyToeplitzMatrix(matrixOne))
console.log('matrixTwo', identifyToeplitzMatrix(matrixTwo))


