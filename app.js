let arr = ["1", 1, 2, 12, 351, 5, "5", 10, 10, 2, "1", 1, 5, "7", 20];

function cleanRoom(list) {
  let numArr = [];
  let strArr = [];

  // sorted array
  let sortedArray = arr.sort((a, b) => a - b);

  //  differentiates the sorted list
  for (let num of list) {
    if (typeof num === "string") {
      strArr.push(num);
    } else if (typeof num === "number") {
      numArr.push(num);
    } else {
      return "not number or str";
    }
  }

  console.log("sorted arr:", sortedArray);
  console.log("");
  console.log("str arr:", strArr);
  console.log("");

  console.log("num arr:", numArr);
  console.log("");

  let combinedArr = [...numArr, ...strArr];
  combinedArr.sort((a, b) => a - b);

  console.log("combined:", combinedArr);
  console.log("");
  //   filter out target and return that target
  const filterCombineStr = combinedArr.filter((val) => {
    return typeof val === "string";
  });

  const filterCombineNum = combinedArr.filter((val) => {
    return typeof val === "number";
  });

  console.log("original combined arr:", combinedArr);
  console.log("new filter combined strings:", filterCombineStr);
  console.log("new filter combined numbers:", filterCombineNum);

  //   loop
  // if value match
  // put into array

  //   ["1", 1, 2, 12, 5, "5", 10, 2, "1", 1, "7", 20];

  //   should I do a loop to concat push into an array?

  for (let i = 0; i < filterCombineNum.length; i++) {
    for (let j = i + 1; j < filterCombineNum.length; j++) {
      if (filterCombineNum[i] === filterCombineNum[j]) {
        let newFiltCombine = [];
        newFiltCombine.push(filterCombineNum[i], filterCombineNum[j]);
      }
    }
  }
}

// recieves the array,
// function runs, instatiates empty arrays, sorts array
cleanRoom(arr);

// // ============================ Instructions ========================================

// // Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// // ============================ Instruction Breakdown ================================

// // GOAL: I want to put all matching/repeating values into their own array within a containing array

// // Clean the room function

// // given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

// //  make a function

// // that organizes

// // these into individual arrays

// //  that is ordered.

// // should return:

// // [
// // [1,1,1,1],
// // [2,2,2],
// // 4,
// // 5,
// // 10,
// // [20,20],
// // 391,
// // 392,
// // 591
// // ]

// // organize strings differently from number types.

// // [1, "2", "3", 2] -> [[1,2], ["2", "3"]] // organizes numbers into one array and strings into another array

// // ============================ My Attempt =======================================

// // Clean the room function
// function cleanTheRoom() {}

// // given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
// const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// //  make a function that organizes
// function organize() {}

// // these into individual arrays => [] => [[1,1,1], [2,2,2], [3, 3]]

// // ===== .map()
// example.map(myFunction);

// // ===== .every()
// // if value is typeof string OR
// // if value is typeof num
// // do something
// // const numbers = [45, 4, 9, 16, 25];
// // let allOver18 = numbers.every(myFunction);

// // function myFunction(value, index, array) {
// //   return value > 18;
// // }

// // ===== .from(exampleArray)
// // Array.from("ABCDEFG");

// // ===== .slice(3) --> creates new array. slice rest of the array starting from index specified
// // example.slice(3);

// // ===== .splice(2, 0, "goku", "vegeta") ---> inserts values starting at index 2. the 0 erases none.
// //  banana, orange, apple, mango
// //  banana, orange, goku, vegeta, apple, mango

// // ===== .splice(2, 1, "goku", "vegeta")
// // banana, orange, goku, vegeta, mango

// // ===== .includes(item) --> if 1 is present, put into sub-array
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // fruits.includes("Mango"); // is true

// // ===== find()
// // const example = [4, 9, 16, 25, 29];
// // let first = numbers.find(myFunction);

// // function myFunction(value, index, array) {
// //   return value > 18;
// // }

// //  that is ordered.
// [].sort(function (a, b) {
//   return a - b;
// }); // copied from w3schools. thoroughly read through array methods to find code I need
// example.sort((a, b) => a - b);

// // should return:

// // [
// // [1,1,1,1],
// // [2,2,2],
// // 4,
// // 5,
// // 10,
// // [20,20],
// // 391,
// // 392,
// // 591
// // ]

// // organize strings differently from number types.

// // [1, "2", "3", 2] -> [[1,2], ["2", "3"]] // organizes numbers into one array and strings into another array

// // ============================ Problems & Analysis ==============================

// // Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

// // ============================ Instructions =====================================

// // ============================ Instruction Breakdown ============================

// // ============================ My Attempt =======================================

// // ============================ Problems & Analysis ==============================

// // Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// // ============================ Instructions =====================================

// // ============================ Instruction Breakdown ============================

// // ============================ My Attempt =======================================

// // ============================ Problems & Analysis ==============================
