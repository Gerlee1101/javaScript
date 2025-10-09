// for (let i = 0; i < 10; i++) {
//   console.log(i + 1);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let arr = [1, 2, 3, 4, 56, 78, 90, 876, 768, 456, 76, 3, 65];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const arr = [235, 23, 54, 66, 3, 65656, 458];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// const array = [5, 0, 10, 0, 20];
// let sum1 = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] != 0) {
//     sum1 = sum1 + array[i];
//   }
// }
// console.log(sum1);

// const array1 = [1, 4, 63, 8, -4];
// let min = array1[0];
// for (let i = 0; i < array1.length; i++) {
//   if (array1[i] < min) {
//     min = array1[i];
//   }
// }
// console.log(min);

// const arr = [1, 23, 23, 6, 56, 5, 56, 56];

// let max = arr[0];
// let count = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//     count = i;
//   }
// }
// console.log(count, "-r element");
// console.log("max=", max);

// const arr = [12, 6, 87, 9, 23];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// const arr = [12, 3, 2, 45, 71, 28, 78, 65];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2]) {
//     count++;
//     console.log(arr[i + 1]);
//   }
// }

// console.log(count);

// const arr = [23, 4, 56, 78, 9, 18];
// for (let i = 0; i < arr.length; i++) {
//   for (let k = i + 1; k < arr.length; k++) {
//     console.log(arr[i], arr[k]);
//   }
// }

// const arr = [45, 67, 5, 89, 25, 78, 4, 4];
// let a = 29;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let k = i + 1; k < arr.length; k++) {
//     console.log(arr[i], arr[k]);
//     if (arr[i] + arr[k] == a) {
//       count++;
//     }
//   }
// }
// console.log("нийлбэр нь " + a + " тоотой тэнцүү хосын тоо", count);

// const arr1 = [12, 45, 67, 8, 9, 4];
// const arr2 = [34, 6, 8, 76, 92, 45];
// let arr3 = [];
// let index = 0;

// for (let i = 0; i < arr1.length; i++) {
//   for (let k = 0; k < arr2.length; k++) {
//     if (arr1[i] == arr2[k]) {
//       arr3[index] = arr2[k];
//       index++;
//     }
//   }
// }

// console.log(arr3);

// const arr = [12, -8, -12, 45, 78, 976];
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     arr1.push(arr[i]);
//   }
// }
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     arr1.push(arr[i]);
//   }
// }
// console.log(arr1);

// const arr = [45, 46, 47, 48, 49, 50, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63];
// for (i = 0; i < arr.length - 1; i++) {
//   if (arr[i + 1] - arr[i] != 1) {
//     console.log(arr[i] + 1);
//   }
// }

// for (let i = 0; i < arr.length; i++) {}

// -----function array(arr) {
//   let too;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] - arr[i] != 1) {
//       too = arr[i] + 1;

//     }
//   }

// }

// const index = array([45, 46, 47, 48, 49, 50, 51, 52, 53, 55, 56, 57, 59, 60]);
// console.log(index);

// function number(arr) {
//   count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = i + 1; k < arr.length; k++)
//       if (arr[i] == arr[k]) {
//         console.log(arr[i], arr[k]);
//         count++;
//       }
//   }
//   return count;
// }

// const array = number(54, 1, 43, 7, 37, 68, 85, 1, 94, 1);
// console.log(array);

// const number = [2, 45, 2, 3, 2, 4, 6, 7, 2, 56, 34, 2, 78, 562, 2];
// const num = 2;
// count = 0;
// for (let i = 0; i < number.length; i++) {
//   if (number[i] === num) {
//     count++;
//   }
// }

// console.log(count);

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
// -------function secondMax(arr) {
//   let firstmax = arr[0];
//   let secondmax = arr[1];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       firstmax = arr[i];
//       secondmax = arr[i + 1];
//       return secondmax;
//     }
//     else if (arr[i] > secondmax && arr[i] < firstmax) return secondmax;
//   }
// }
// const array = secondMax([23, 45, 67]);
// console.log(array);

function rotate(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (k = 0; k < arr.length; k++) {
      arr[k - 1] = arr[i];
    }
    return arr;
  }
}

const array = rotate([1, 2, 3, 4, 5, 6], 3);
console.log(array);
