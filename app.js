/*
Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
*/

function findTwoNums(numsArr, target) {
  // loop over, add, if loops equal target

  for (let i = 0; i < numsArr.length; i++) {
    for (let j = i + 1; j < numsArr.length; j++) {
      if (numsArr[i] + numsArr[j] === target) {
        return [numsArr[i], numsArr[j]];
      }
    }
  }
}

console.log(findTwoNums([4, 5, 3, 2], 7));
