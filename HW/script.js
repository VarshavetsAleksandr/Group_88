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

// console.log(new Date());

// Автоперевірка №3 1/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// console.log(apartment);

// Автоперевірка №3 2/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// console.log(apartment);

// Автоперевірка №3 3/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// Автоперевірка №3 4/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags - 1];

// Автоперевірка №3 5/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// Автоперевірка №3 6/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment);

// Автоперевірка №3 7/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };
// console.log(apartment);

// Автоперевірка №3 8/41
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };
// console.log(product);

// Автоперевірка №3 9/41
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

// Автоперевірка №3 10/41
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// Автоперевірка №3 11/41
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

// Автоперевірка №3 12/41
// function countProps(object) {
//   let propCount = 0;
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// Автоперевірка №3 13/41
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);
// console.log(keys);

// Автоперевірка №3 14/41
// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   propCount = keys.length;
//   return propCount;
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// Автоперевірка №3 15/41
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);

// Автоперевірка №3 16/41
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const salary = Object.values(salaries);
//   for (const item of salary) {
//     totalSalary += item;
//   }
//   console.log(totalSalary);
//   return totalSalary;
// }
// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// Автоперевірка №3 17/41
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const item of colors) {
//   hexColors.push(item.hex);
//   rgbColors.push(item.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// Автоперевірка №3 18/41
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
// }

// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");

// Автоперевірка №3 19/41
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const keyValue = [];
//   for (const key of products) {
//     if (key.hasOwnProperty(propName)) {
//       keyValue.push(key[propName]);
//     }
//   }
//   console.log(keyValue);
//   return keyValue;
// }
// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");

// Автоперевірка №3 20/41
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   console.log(totalPrice);
//   return totalPrice;
// }
// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

// Автоперевірка №3 21/41
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// Автоперевірка №3 22/41
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// Автоперевірка №3 23/41
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Автоперевірка №3 24/41
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// Автоперевірка №3 25/41
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// Автоперевірка №3 26/41
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// });
// calculateMeanTemperature({
//   today: { low: 37, high: 40 },
//   tomorrow: { low: 33, high: 38 },
// });

// Автоперевірка №3 27/41
// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

// Автоперевірка №3 28/41
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// console.log(allScores);
// const bestScore = Math.max(...allScores);
// console.log(bestScore);
// const worstScore = Math.min(...allScores);
// console.log(worstScore);

// Автоперевірка №3 29/41
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// Автоперевірка №3 30/41
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   const finalData = { category, priority, ...data, completed };
//   console.log(finalData);
//   return finalData;
// }

// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });

// Автоперевірка №3 31/41
// function add(...args) {
//   let totalCalculate = 0;
//   for (const item of args) {
//     totalCalculate += item;
//   }
//   return totalCalculate;
// }
// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);

// Автоперевірка №3 32/41

// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) total += arg;
//   }
//   console.log(total);
//   return total;
// }
// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);

// Автоперевірка №3 33/41
// function findMatches(firstArgs, ...args) {
//   const matches = [];
//   for (const arg of args) {
//     if (firstArgs.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   console.log(matches);
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

// Автоперевірка №3 34/41
// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };
// bookShelf.getBooks();
// bookShelf.addBook("Haze");
// bookShelf.removeBook("Red sunset");
// bookShelf.updateBook("Sands of dune", "Dune");

// Автоперевірка №3 35/41
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     let idx = this.books.indexOf(oldName);
//     this.books.splice(idx, 1, newName);
//     console.log(bookShelf);
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles");
// bookShelf.updateBook("The last kingdom", "Dune");

// Автоперевірка №3 36/41
// const atTheOldToad = {
//   potions: [],
// };

// Автоперевірка №3 37/41
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };
// atTheOldToad.getPotions();

// Автоперевірка №3 38/41
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     console.log(this.potions);
//     return this.potions;
//   },
// };
// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion");
// Автоперевірка №3 39/41
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const idxPotion = this.potions.indexOf(potionName);
//     this.potions.splice(idxPotion, 1);
//     console.log(this.potions);
//   },
// };

// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");
// Автоперевірка №3 40/41
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     const idxPotion = this.potions.indexOf(oldName);
//     this.potions.splice(idxPotion, 1, newName);
//     console.log(this.potions);
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");

// Автоперевірка №3 41/41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//       }
//     }
//     console.log(this.potions);
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
