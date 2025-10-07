// function isDivisibleBy5(a){
//     if (a%5===0)
//     {
//         return false;
//     }
//     else {
//         return true;
//     }
// }
// const result=isDivisibleBy5(59);
// console.log(result);

// function find(a) {
//   if (1 < a) {
//     if (a < 100) {
//       return "include";
//     } else {
//       return "exclude";
//     }
//   }
// }
// const b = find(56);
// console.log(b);

// function max(a, b, c) {
//   if (a >= b) {
//     if (a >= c) {
//       return a;
//     }
//   }
//   if (a >= b) {
//     if (a <= c) {
//       return c;
//     }
//   }
//   if (a <= b) {
//     if (b >= c) {
//       return b;
//     } else {
//       return c;
//     }
//   }
//   if (a <= b) {
//     if (b >= c) {
//       return c;
//     }
//   }
// }
// const d = max(23, 56, 79);
// console.log("max=", d);

// function olimp(a) {
//   if (a >= 1896) {
//     if (a % 4 === 0) {
//       return "olimpiin jil";
//     } else {
//       return "olimpiin jil bish";
//     }
//   }
// }
// const e = olimp(2024);
// console.log(e);

// function Dun(a) {
//   if (a >= 90) {
//     if (a <= 100) {
//       return "A";
//     }
//   }
//   if (a >= 80) {
//     if (a <= 89) {
//       return "B";
//     }
//   }
//   if (a >= 70) {
//     if (a <= 79) {
//       return "C";
//     }
//   }
//   if (a >= 60) {
//     if (a <= 69) {
//       return "D";
//     }
//   } else {
//     return "F";
//   }
// }
// const p = Dun(90);
// console.log(p);

// function month(a) {
//   if (a >= 2) {
//     if (a <= 4) {
//       return "Spring";
//     }
//   }
//   if (a >= 5) {
//     if (a <= 7) {
//       return "Summer";
//     }
//   }
//   if (a >= 8) {
//     if (a <= 10) {
//       return "Autumn";
//     }
//   }
//   if (a >= 11) {
//     if (a <= 12) {
//       return "Winter";
//     }
//   }
// }
// const season = month(4);
// console.log(season);

// function time(a) {
//   if (a >= 6) {
//     if (a <= 12) {
//       return "Good Morning";
//     }
//   }
//   if (a >= 13) {
//     if (a <= 18) {
//       return "Good Afternoon";
//     }
//   }
//   if (a >= 19) {
//     if (a <= 24) {
//       return "Good Evening";
//     }
//   }
// }
// const greetings = time(7);
// console.log(greetings);

// function day(weather, temperature) {
//   if (weather == "sunny") {
//     if (temperature > 30) {
//       console.log("weather=", weather, "temperature=", temperature);
//       return "It's a hot day!";
//     } else if (temperature >= 20) {
//       if (temperature <= 30) {
//         console.log("weather=", weather, "temperature=", temperature);
//         return "It's a warm day";
//       }
//     } else if (temperature < 20) {
//       console.log("weather=", weather, "temperature=", temperature);
//       return "It's a bit cool today";
//     }
//   } else if (weather == "rainy") {
//     console.log("weather=", weather, "temperature=", temperature);
//     return "Don't forget your umbrella!";
//   }
// }
// const days = day("sunny", 25);
// console.log(days);

// function age(a) {
//   if (a > 18) {
//     return "You are old enough to drive";
//   } else if (a < 18) {
//     let b = 18 - a;
//     // console.log("You are left with ", b, "ears to drive");
//     return "You are left with " + b + " ears to drive";
//   }
// }
// const person = age(16);
// console.log(person);

// function taluud(a, b, c) {
//   if (a + b > c) {
//     if (b + c > a) {
//       if (a + c > b) {
//         return "3 tal ni zuv baina.";
//       }
//     }
//   } else {
//     return "3 tal ni zuv bish baina.";
//   }
// }
// const triangle = taluud(120, 23, 294);
// console.log(triangle);

// function letter(a) {
//   if (a == "a") return "Vowel";
//   else if (a == "A") return "Vowel";
//   else if (a == "e") return "Vowel";
//   else if (a == "E") return "Vowel";
//   else if (a == "U") return "Vowel";
//   else if (a == "u") return "Vowel";
//   else if (a == "O") return "Vowel";
//   else if (a == "o") return "Vowel";
//   else if (a == "i") return "Vowel";
//   else if (a == "I") return "Vowel";
//   else if (a == "Y") return "Vowel";
//   else if (a == "y") return "Vowel";
//   else {
//     return "consonant";
//   }
// }
// const English_letters = letter("s");
// console.log(English_letters);

// function letter(a) {
//   if (a == "a" || a == "A") return "Vowel";
//   else if (a == "e" || a == "E") return "Vowel";
//   else if (a == "U" || a == "u") return "Vowel";
//   else if (a == "O" || a == "o") return "Vowel";
//   else if (a == "i" || a == "I") return "Vowel";
//   else if (a == "Y" || a == "y") return "Vowel";
//   else {
//     return "consonant";
//   }
// }
// const English_letters = letter("m");
// console.log(English_letters);

// function Letter(letter) {
//   const vowels = ("a", "A", "e", "E", "i", "I", "u", "U", "y", "Y", "o", "O");
//   if (letter == vowels) {
//     return "vowel";
//   } else {
//     return "consonant";
//   }
// }

// const English_letters = Letter("e");
// console.log(English_letters);
