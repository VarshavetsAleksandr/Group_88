// Автоперевірка №2 1/32

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     // return "You are an adult";
//       return "You are an adult";
//   }

//     return "You are a minor";
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// Автоперевірка №2 2/32
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//     }
//   return "Access denied, wrong password!";

// }
// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// Автоперевірка №2 3/32
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return console.log("Your order is empty!");
//   }

//   if (ordered > available) {
//     return console.log("Your order is too large, not enough goods in stock!");
//   }

//   return console.log("The order is accepted, our manager will contact you");
// }
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// Автоперевірка №2 4/32
// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

// Автоперевірка №2 5/32
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);
// console.log(fruits);

// Автоперевірка №2 6/32
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

// Автоперевірка №2 7/32
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// Автоперевірка №2 8/32
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

// Автоперевірка №2 9/32
// function getExtremeElements(array) {
//   let getArray = [array[0], array[array.length - 1]];
//   return getArray;
// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// Автоперевірка №2 10/32
// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);
//   console.log(words);
//   return words;
// }
// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");

// Автоперевірка №2 11/32
// function calculateEngravingPrice(message, pricePerWord) {
//   let words;
//   words = message.split(" ");
//   let price = words.length * pricePerWord;
//   console.log(price);
//   return price;
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);

// Автоперевірка №2 12/32
// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter);
//   console.log(string);
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");

// Автоперевірка №2 13/32
// function slugify(title) {
//   const getSplit = title.split(" ");
//   const getJoin = getSplit.join("-");
//   const getLowerCase = getJoin.toLowerCase();
//   console.log(getLowerCase);
//   return getLowerCase;
// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// Автоперевірка №2 14/32
// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// Автоперевірка №2 15/32
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// Автоперевірка №2 16/32
// function makeArray(firstArray, secondArray, maxLength) {
//   const getArray = firstArray.concat(secondArray);
//   const getSliceArray = getArray.slice(0, maxLength);
//   console.log(getSliceArray);
//   return getSliceArray;
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

// Автоперевірка №2 17/32
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// Автоперевірка №2 18/32
// function calculateTotal(number) {
//   let result = 0;
//   for (let i = 0; i <= number; i += 1) {
//     result += i;
//   }
//   return result;
// }
// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);
// calculateTotal(100);

// Автоперевірка №2 19/32
// const fruits = ["apple", "plum", "pear", "orange"];
// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// Автоперевірка №2 20/32
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

// Автоперевірка №2 21/32

// function findLongestWord(string) {
//   // розділяємо рядок на масив слів
//   const words = string.split(" ");
//   // створюємо змінну з пустим рядком для порівняння при перебірці масиву в циклі for
//   let longestWord = "";
//   //перебираємо масив
//   for (let i = 0; i < words.length; i += 1) {
//     //   перевіряємо довжину масиву та порівнюємо довжину зі змінною let longestWord
//     if (words[i].length > longestWord.length) {
//       // якщо довжина ітеруємого елементу білше ніж довжина змінної let longestWord
//       //   то перевизначаємо змінну let longestWord
//         longestWord = words[i];
//       }
//   }
//   console.log(longestWord);
//   return longestWord;
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");
// findLongestWord("");

// Автоперевірка №2 22/32
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);
// createArrayOfNumbers(100, 150);

// Автоперевірка №2 23/32
// function filterArray(numbers, value) {
//   const arrNumb = [];
//   for (i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       arrNumb.push(numbers[i]);
//     }
//   }
//   console.log(arrNumb);
//   return arrNumb;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);
// filterArray([1, 2, 3, 45, 66, 78, 24, 11, 7, 8], 15);

// Автоперевірка №2 24/32
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   const findFruit = fruits.includes(fruit);
//   console.log(findFruit);
//   return findFruit;
// }
// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple");
// checkFruit("");

// Автоперевірка №2 25/32
// function getCommonElements(array1, array2) {
//   let array3 = [];
//   for (let i = 0; i < array2.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       array3.push(array1[i]);
//     }
//   }
//   console.log(array3);
//   return array3;
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);
// getCommonElements();

// Автоперевірка №2 26/32
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const a of order) {
//     total += a;
//   }
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);
// calculateTotalPrice([1, 2, 3, 4, 5, 6, 7, 8, 141, 12412, 12]);

// Автоперевірка №2 27/32
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const valueNum of numbers) {
//     if (valueNum > value) {
//       filteredNumbers.push(valueNum);
//     }
//   }
//   console.log(filteredNumbers);
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);
// filterArray([12, 24, 8, 41, 76], 20);

// Автоперевірка №2 28/32
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// Автоперевірка №2 29/32
// function getEvenNumbers(start, end) {
//   const arr = [];
//   for (let i = start; i <= end; i += 1) {
//     let number = i % 2;
//     if (number === 0) {
//       arr.push(i);
//     }
//   }
//   console.log(arr);
//   return arr;
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// Автоперевірка №2 30/32
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     console.log(number);
//     break;
//   }
// }

// Автоперевірка №2 31/32
// function findNumber(start, end, divisor) {
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       console.log(number);
//       return number;
//     }
//   }
// }
// findNumber(2, 6, 5); //5
// findNumber(8, 17, 3); //9
// findNumber(6, 9, 4); //8
// findNumber(16, 35, 7); //21

// Автоперевірка №2 32/32
// function includes(array, value) {
//   let bool = false;
//   for (const a of array) {
//     if (a === value) {
//       bool = true;
//     }
//   }
//   console.log(bool);
//   return bool;
// }
// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");
