function diagonal(arr) {
  let firstSum = 0
  let counter = 0
  for (let i = 0; i <= arr.length - 1; i++) {
    firstSum += arr[i][counter]
    counter += 1
  }

  let secondSum = 0
  let newCounter = 0
  for (let j = arr.length - 1; j >= 0; j--) {
    secondSum += arr[j][newCounter]
    newCounter += 1
  }

  return Math.abs(firstSum - secondSum)
}

console.log(diagonal([[-1, 1, -7, -8], [-10, -8, -5, -2], [0, 9, 7, -1], [4, 4, -2, 1]]))