//  1. Count Occurrences
// Problem: Count how many times a number appears in an array

// function number(arr) {
//   let count = 0;
//   const num = 4;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       count++;
//     }
//   }
//   return count;
// }
// const array = number([2, 45, 2, 4, 2, 4, 2, 78, 562, 2]);
// console.log(array);

// 2. Check if Number Exists
// Problem: Return true if a number exists in the array

// function array(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return true;
//     }
//   }
//   return false;
// }
// const ab = array([2, 45, 2], 45);
// console.log(ab);

// 3. Find Second Largest
// Problem: Find the second largest number in an array

// function secondMax(arr) {
//   let firstmax = -Infinity;
//   let secondmax = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstmax) {
//       secondmax = firstmax;
//       firstmax = arr[i];
//     } else if (arr[i] > secondmax && arr[i] < firstmax) {
//       secondmax = arr[i];
//     }
//   }
//   return secondmax;
// }
// const array = secondMax([23, 45, 67, 8, 79, 99, 23, 567]);
// console.log(array);

// 4. Rotate Array
// Problem: Rotate array right by k positions

// function rotate(arr, k) {
//   for (let i = 0; i < arr.length; i++) {

//         return arr;
//   }
// }

// const array = rotate([1, 2, 3, 4, 5], 2);
// console.log(array);

// function rotateArr(arr, d) {
//   let n = arr.length;

//   // Repeat the rotation d times
//   for (let i = 0; i < d; i++) {
//     // Right rotate the array by one position
//     let last = arr[n - 1];
//     for (let j = n - 1; j > 0; j--) arr[j] = arr[j - 1];
//     arr[0] = last;
//   }
//   return arr;
// }
// const rotateArr1 = rotateArr([1, 2, 3, 4, 5, 6], 3);
// console.log(rotateArr1);

// 5. Remove Duplicates (preserve order)
// Problem: Remove duplicate numbers while keeping first occurrence

// function duplicateremove(arr) {
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isExist = false;

//     for (let k = 0; k < temp.length; k++) {
//       if (arr[i] === temp[k]) {
//         isExist = true;
//       }
//     }

//     if (isExist === false) {
//       temp.push(arr[i]);
//     }
//   }
//   return temp;
// }
// const remove = duplicateremove([2, 3, 4, 66, 7, 2, 4, 78, 66, 3, 4]);
// console.log(remove);

// 6. Factorial Sum
// Problem: Return sum of factorials of each number in array

// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const fact = factorial(arr[i]);
//     sum += fact;
//   }
//   return sum;
// }
// const factsum = sum([2, 3, 4]);
// console.log(factsum);

// function factorial(n) {
//   let p = 1;
//   for (let i = 1; i <= n; i++) {
//     p = p * i;
//   }
//   return p;
// }

// 7. Array Rotation Check
// Problem: Check if arr2 is rotation of arr1

// function rotate(arr, k) {
//   for (let i = 0; i < arr.length; i++) {

//         return arr;
//   }
// }

// const array = rotate([1, 2, 3, 4, 5], 2);
// console.log(array);

function rotateArr(arr1, arr2) {
  let temp = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1.length === arr2.length) {
        temp = arr1 + arr1;

        // for (let k = 0; k < temp.length; k++) {
        //   if (temp[k] === arr2[j]) return true;
        // }
        return false;
      }
      return false;
    }
  }
}

const rotateArrs = rotateArr([1, 2, 3, 4, 5], [4, 5, 1, 2, 3]);
console.log(rotateArrs);
