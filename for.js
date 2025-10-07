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

const arr = [12, 6, 87, 9, 23];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
