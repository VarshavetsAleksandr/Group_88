// ІНСТРУКЦІЯ if

// if (умова1)
// {інструкція1}
// * {інструкція 1} виконується, якщо результатом (умова 1) буде true

// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost);

// subscription = "pro" в (умова1) перевіряємо за
// допомогою строгого порівняння ===
// subscription = "pro" ==="pro" => отримаємо значення true
// {інструкція1} виконується, переназначаємо змінну cost = 100;

// let cost = 0;
// const subscription = "vip";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost);

// subscription = "vip" в (умова1) перевіряємо за
// допомогою строгого порівняння ===
// subscription = "vip" ==="pro" => отримаємо значення false
// {інструкція1} не виконується, змінну не переназначаємо cost = 0;

// !!! ІНСТРУКЦІЯ if - МОЖУТЬ ПЕРЕВІРИТИ І ЗРЕАГУВАТИ НА
// ВИКОНАННЯ АБО НЕВИКОНАННЯ ЛИШЕ ОДНІЄЮ УМОВИ, ТОБТО ВИКОНУЄМО
// {інструкція1} ЯКЩО (умова1) => ОТРИМУЄ РЕЗУЛЬТАТ true,
// ЯКЩО (умова1) => ОТРИМУЄ РЕЗУЛЬТАТ false - ІНСТРУКЦІЯ if НЕ ВИКОНУЄТЬСЯ

// ІНСТРУКЦІЯ if else
// if (умова1) {інструкція1}
// else (умова2) {інструкція2}
// * {інструкція 1} виконується, якщо результатом (умова 1) буде true
// * якщо результатом (умова 1) буде false, тоді пропускаємо {інструкція 1}
// та переходимо до виконання {інструкція 2}

// let cost;
// const subscription = "vip";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost);

// subscription = "vip" в (умова1) перевіряємо за
// допомогою строгого порівняння ===
// subscription = "vip" ==="pro" => отримаємо значення false
// {інструкція1} не виконується, переходимо до виконання
// {інструкція2}, змінна cost = 0;

// !!! ІНСТРУКЦІЯ if else - МОЖУТЬ ПЕРЕВІРИТИ І ЗРЕАГУВАТИ НА
// ВИКОНАННЯ АБО НЕВИКОНАННЯ ЛИШЕ ОДНІЄЮ УМОВИ, ТОБТО ВИКОНУЄМО
// {інструкція1} ЯКЩО (умова1) => ОТРИМУЄ РЕЗУЛЬТАТ true,
// ЯКЩО (умова1) => ОТРИМУЄ РЕЗУЛЬТАТ false - ВИКОНУЄТЬСЯ {інструкція2}

// ІНСТРУКЦІЯ else if
// АНАЛОГІЧНА ІНСТРУКЦІЇ if else, АЛЕ ДОЗВОЛЯЄ ДОДАТИ ПІСЛЯ ОПЕРАТОРУ else
// ЩЕ ОДИН ОПЕРАТОР if З УМОВОЮ. ВКІНЦІ ЛАНЦЮЖКА МОЖЕ БУТИ КЛАСИЧНИЙ БЛОК
// else, КОТРИЙ ВИКОНУЄТЬСЯ ЛИШЕ ТОДІ, КОЛИ ВСІ ІНШІ УМОВИ БУДУТЬ => false

// const value = 13;
// if (value === 1) {
//     console.log(1);
// } else if (value === 10) {
//     console.log('first', 10);
// } else if (value === 7) {
//     console.log(7);
// } else if (value === 12) {
//     console.log('second', 12);
// } else {
//     console.log('default');
// }


// const value =11;
// if (value === 1) {
//     console.log(1);
// } else if (value < 10 && value > 5) {
//     console.log('first', 10);
// } else if (value === 10) {
//     console.log('second', 10);
// } else {
//     console.log('default');
// }



/***** Інструкція switch *****/

// switch (ЗНАЧЕННЯ) {
//   case значення1:
//     інструкція1;
//     break;

//   case значення2:
//     інструкція2;
//     break;

//   case значення3:
//     інструкція3;
//     break;

//   default:
//     інструкціЯДефолт;
// }

// ІНСТРУКЦІЯ switch ПОРІВНЮЄ СВОЄ (ЗНАЧЕННЯ) ЗІ НАЧЕННЯМИ
// - case значення1 , ЯКЩО switch (ЗНАЧЕННЯ) === case значення1 => ОТРИМУЄМО ЗНАЧЕННЯ true,
// ТОДІ ВИКОНУЄТЬСЯ інструкція1, ПОДАЛЬШІ ПЕРЕВІРКИ ПРИПИНЯЮТЬСЯ ЗА ДОПОМОГОЮ
// ОПЕРАТОРУ break ВКІНЦІ БЛОКУ case;
// ЯКЩО switch (ЗНАЧЕННЯ) === case значення1 => ОТРИМУЄМО ЗНАЧЕННЯ false,
// ПЕРЕХОДИМО ДО ПОДАЛЬШОЇ ПЕРЕВІРКИ
// switch (ЗНАЧЕННЯ) === case значення2 => ОТРИМУЄМО ЗНАЧЕННЯ true,
// ТОДІ ВИКОНУЄТЬСЯ інструкція2;
// ЯКЩО ПІД ЧАС ПОРІВНЯННЯ switch (ЗНАЧЕННЯ) === case значення,
// ЖОДНЕ ПОРІВНЯННЯ НЕ ДАЛО РЕЗУЛЬТАТ true, ТОДІ ВИКОНУЄТЬСЯ
// інструкціЯДефолт;

// const value = 8;

// switch (value) {
//     case 1:
//         console.log('Один');
//         break;
//     case 3:
//         console.log('Три');
//         break;
//     case 4:
//         console.log('Чотири');
//         break;
//     case 7:
//         console.log('Сім');
//         break;
//     default:
//         console.log('default');
// }


/***** Тернарний оператор *****/
// СИНТАКСИС
// <умова> ? <вираз_якщо_умова_true> : <вираз_якщо_умова_false>
// ТЕРНАРНИЙ ОПЕРАТОР "АНАЛОГІЧНИЙ" ІНСТРУКЦІЇ if...else, АЛЕ СИНТАКСИЧНО КОРОТШИЙ ЗА НАПИСАННЯМ.
// ТЕРНАРНИЙ ОПЕРАТОР ПРАЦЮЄ НАСТУПНИМ ЧИНОМ:
// ЯКЩО <умова> => true, ОБЧІСЛЮЄТЬСЯ ВИРАЗ ПІСЛЯ ?
// ЯКЩО <умова> => false, ОБЧІСЛЮЄТЬСЯ ВИРАЗ ПІСЛЯ :

// const a = 10;
// let b;

// (a > 5) ? (b = 15) : (b = 5)
// console.log(b);

// ОТРИМАЄМО РЕЗУЛЬТАТ => b = 15
// (a > 5) - умова
// (b = 15) - вираз_якщо_умова_true
// (b = 5) - вираз_якщо_умова_false

// const value = 17;

// value > 15 && value < 20 ? console.log('в діапазоні від 15 до 20') : console.log('Спробуйте ще');

// if (value > 15 && value < 20) {
//     console.log('в діапазоні від 15 до 20')
// }

// const value = 16;
// let message;

// value > 15 && value < 20 ? message = 'в діапазоні від 15 до 20' : message = 'Спробуйте ще';

// console.log(message);

// const value = 17;
// let message;

// message = value > 15 && value < 20 ?  'в діапазоні від 15 до 20' : 'Спробуйте ще';

// console.log(message);




/***** Області видимості (variable scope) *****/ //(Обов'язково !!!)

// ОБЛАСТІ ВИДИМОСТІ Є - 1)Глобальна та 2)Локальна
// ГЛОБАЛЬНА ОБЛАСТЬ ВИДИМОСТІ ЗМІННОЇ - (ЗМІННА ОГОЛОШЕНА ПОЗА БУДЬ ЯКИМ БЛОКОМ)
// КОЖЕН ТА В БУДЬ ЯКОМУ МІСЦІ КОДУ МАЄ ДОСТУП ДО ЗМІННОЇ ОГОЛОШЕНОЇ У ГЛОБАЛЬНІЙ ОБЛАСТІ ВИДИМОСТІ.

// const value = 5;

// if (true) {
//   console.log("Block scope: ", value); // 5
// }

// console.log("Global scope: ", value); // 5

// МИ БАЧИМО ЗМІННУ const value = 5; У БУДЬ ЯКОМУ МІСЦІ КОДУ,
// ТОМУ ЩО ВОНА ОГОЛОШЕНА У ГЛОБАЛЬНІЙ ОБЛАСТІ ВИДИМОСТІ;
// ТОБТО МИ БАЧИМО const value = 5; І ВСЕРЕДИНІ КОНСТРУКЦІЇ
// if (true) {
//   console.log("Block scope: ", value); // 5
// }
// І БАЧИМО ПОЗА КОНСТРУКЦІЄЮ.

// ЛОКАЛЬНА ОБЛАСТЬ ВИДИМОСТІ ЗМІННОЇ - (ЗМІННА ОГОЛОШЕНА У БУДЬ ЯКІЙ КОНСТРУКЦІЇ, ЯКА
// ВИКОРИСТОВУЄ ФІГУРНІ ДУЖКИ {}) - ЗМІННІ ЯКІ БУЛИ ОГОЛОШЕНІ У ЛОКАЛЬНІЙ ОБЛАСТІ ВИДИМОСТІ
//  НЕДОСТУПНІ ПОЗА МЕЖАМИ БЛОКУ (ПОЗА МЕЖАМИ {})

// if (true) {
//   const value = 5;
//   console.log("Block scope: ", value); // 5
// }

// console.log("Global scope: ", value); // ReferenceError: value is not defined

// МИ БАЧИМО const value = 5; ТІЛЬКИ У ОБЛАСТІ ВСЕРЕДИНІ КОНСТРУКЦІЇ if (true) {...}
// ТОМУ ЩО ЗМІННА const value = 5; БУЛА ОГОЛОШЕНА У ЛОКАЛЬНІЙ ОБЛАСТІ ВИДИМОСТІ,
// ВСЕРЕДИНІ ФІГУРНИХ ДУЖОК {};
// ЯКЩО МИ НАМАГАТИМИМОСЬ ЗВЕРНУТИСЯ ДО ЗМІННОЇ const value = 5; ПОЗА МЕЖАМИ
// ЛОКАЛЬНОЇ ОБЛАСТІ ВИДОМОСТІ, ТОДІ ВИНИКНЕ ПОМИЛКА ReferenceError: value is not defined
// (ReferenceError:ЗНАЧЕННЯ НЕ ВИЗНАЧЕНО.)

// !!! ОБЛАСТЬ ВИДИМОСТІ МАЄ ДОСПУП ДО ВСІХ ЗМІННИХ, КОТРІ БУЛИ ОГОЛОШЕНІ ВИЩЕ ПО ІЄРАРХІЇ ВКЛАДЕНОСТІ
// АЛЕ НЕ МОЖЕ ОТРИМАТИ ДОСТУП ДО ЗМІННИХ, ОГОЛОШЕНИХ У ВКЛАДЕНИХ ОБЛАСТЯХ ВИДИМОСТІ.

// <глобальна область>
// const a = 5;
// конструкція1 {
// <локальна область (конструкція1)>
// const b = 5;
// *місце звернення до змінної1
// <локальна область (конструкція1)>
// }
// *місце звернення до змінної2
// <глобальна область>

// const a = 10;

// if (true) {
//     const b = 20;
//     console.log('глобальна', a);
//     console.log('локальна', b);
// }

// console.log('global', a);
// console.log('local', b);

// У ПРИКЛАДІ ВИЩЕ, МИ МОЖЕМО ЗВЕРНУТИСЯ ДО ЗМІННОЇ const a = 5;, ТОМУ ЩО ВОНА ОГОЛОШЕНА У ГЛОБАЛЬНІЙ
// ОБЛАСТІ ВИДИМОСТІ, АЛЕ ЗВЕРНУТИСЯ ДО ЗМІННОЇ const b = 5; ПОЗА МЕЖАМИ конструкція1 {}, НЕ МОЖИМО
// ВИНИКНЕ ПОМИЛКА!!!

// <глобальна область>
// const a = 5;
//
// конструкція1 {
// <локальна область (конструкція1)>
// const b = 5;
// конструкція2 {
// <локальна область (конструкція2)>
// const с = 5;
// *місце звернення до змінної1
// <локальна область (конструкція2)>
// }
// *місце звернення до змінної2
// <локальна область (конструкція1)>
// }
// *місце звернення до змінної3
// <глобальна область>

// У ПРИКЛАДІ ВИЩЕ, МИ МОЖЕМО ЗВЕРНУТИСЯ ДО ЗМІННОЇ const a = 5; ДО ЗМІННОЇ const b = 5;
// ТА ДО ЗМІННОЇ const с = 5; (*місце звернення до змінної1), ТОМУ ЩО ЦІ ЗМІННІ ОГОЛОШЕНІ ВИЩЕ ПО ІЄРАРХІЇ ВКЛАДЕНОСТІ
// АЛЕ ЗВЕРНУТИСЯ ДО ЗМІННОЇ const с = 5; ПОЗА МЕЖАМИ конструкція2 {} *місце звернення до змінної2, МИ НЕ МОЖЕМО.
// ЗВЕРНУТИСЯ ДО ЗМІННИХ const b = 5; ТА const с = 5;
// ПОЗА МЕЖАМИ ЇХ ЛОКАЛЬНИХ ОБЛАСТЕЙ ВИДИМОСТІ *місце звернення до змінної3 МИ НЕ МОЖЕМО, ВИНЕКНЕ ПОМИЛКА

// const a = 10;

// if (true) {
//     const b = 20;
//     console.log('1 глобальна', a); // => true
//     console.log('1 локальна', b); // => true
//     if(true) {
//         const c = 30;
//         console.log('2 глобальна', a); // => true
//         console.log('2 локальна', b); // => true
//         console.log('2 локальна', c); // => true
//     }
//     console.log('1 global', a); // => true
//     console.log('1 local', b); // => true
//     console.log('1 local', c); // => false
// }

// console.log('global', a); // => true
// console.log('local', b); // => false
// console.log('local', c); // => false



//  Глобальна та функціональна
// var


// var num = 10;

// if (true) {
//     var num = 15;
// }

// console.log(num);

// function foo() {
//     var str = 'Hello world';
// }

// console.log(str);





/***** Цикл for *****/


// for (initialization; condition; post-expression) {
//    statements
// }

// for (ініціалізація; умова; пост-вираз) {
//    тіло циклу
// }

// АЛГОРИТМ ВИКОНАННЯ ЦИКЛУ for:
// ініціалізація (initialization) - ВИКОНУЄТЬСЯ ОДИН РАЗ ДО ПОЧАТКУ ЦИКЛУ.
// ТОБТО СТВОРЮЄМО ЗМІННУ-ЛІЧИЛЬНИК ТА ЇЇ ПОЧАТКОВЕ ЗНАЧЕННЯ.
// умова (condition) - ВИРАЗ ЩО ОЦІНЮЄТЬСЯ ПЕРЕД КОЖНОЮ ІТЕРАЦІЄЮ (ПОВТОРЕННЯМ) ЦИКЛУ.
// ТІЛО ЦИКЛУ ВИКОНУЄТЬСЯ ТІЛЬКИ ТОДІ, КОЛИ умова (condition) ПРИВОДИТЬСЯ ДО ЗНАЧЕННЯ true.
// ЦИКЛ ЗАВЕРШУЄТЬСЯ, КОЛИ умова (condition) ПРИВОДИТЬСЯ ДО ЗНАЧЕННЯ false.
// тіло циклу (statements) - НАБІР ІНСТРУКЦІЙ, КОТРІ БУДУТЬ ВИКОНУВАТИСЯ ПРИ КОЖНІЙ ІТЕРАЦІЇ (ПОВТОРЕННІ) ЦИКЛУ.
// тіло циклу (statements) - ВИКОНУЄТЬСЯ ЯКЩО умова (condition) ПРИВОДИТЬСЯ ДО ЗНАЧЕННЯ true.
// пост-вираз (post-expression) - ВИКОНУЄТЬСЯ В КІНЦІ КОЖНОГО ПОВТОРЕННЯ ЦИКЛУ, ПЕРЕД ПЕРЕВІРКОЮ УМОВИ.
// ВИКОРИСТОВУЄТЬСЯ ДЛЯ ОНОВЛЕННЯ ЗМІННОЇ ЛІЧИЛЬНИКА.
// СХЕМА РОБОТИ ЦИКЛУ ЛІЧИЛЬНИКА for
// ініціалізація (initialization) ==> умова (condition) ==> тіло циклу (statements) ==> пост-вираз (post-expression).

// let i;
// const str = 'hello world';
// for (let i = 0; i < str.length; i += 1) {
//     console.log(str[i]);
// }




/***** Цикл while *****/
// const str = 'hello world';
// let i = 0;
// while (i < str.length) {
//     console.log(str[i]);
//     i += 1;
// }

// let i = 0;
// while (i < 0) {
//     console.log('Hello');
//     i += 1
// }

/***** Цикл do while *****/


// let i = 0;

// do {
//     console.log('hello world');
//     i += 1
// } while (i < 0)



// let idx = -1;

// const str = 'Hello world';
// console.log(str.length);
// for (let i = 0; i < str.length; i += 1) {
//     // console.log(i);
//     if (str[i] === 'd') {
//         idx = i;
//         break;
//     }
// }

// console.log('result',idx);



// for (let i = 0; i <= 20; i += 1) {
//     if (i % 2 === 0) {
//         console.log('Парне', i);
//         continue;
//     }
//     console.log('Не парне', i);
// }





// **************************************** Практика ****************************** //



// Task - 1
// Потрібно створити світлофор використовуючи конструкцію if
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати


// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let message = prompt('Вкажіть колір світлофору який бачите ?');
// if (message) {
//     message = message.toLocaleLowerCase();
// }
// let result;
// if (message === 'red') {
//     result = 'STOP'
// } else if (message === 'yellow') {
//     result = 'READY'
// } else if (message === 'green') {
//     result = 'GO'
// } else {
//     result = 'Type valid color'
// }
// console.log(result);
// console.log(message);


// let message = prompt('color ?');
// let action;

// if (message) {
//     message = message.toLowerCase();
// }


// if (message === 'red') {
//     action = 'stop';
// } else if (message === 'yellow') {
//     action = 'ready';
// } else if (message === 'green') {
//     action = 'go';
// } else {
//     action = 'be careful';
// }

// console.log(action);
// console.log(message);






// Task - 2
// Виконай рефакторинг попереднього завдання використовуючи конструкцію switch
// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful


// let message = prompt('Вкажіть колір світлофору який бачите ?');
// if (message) {
//     message = message.toLocaleLowerCase();
// }
// let result;
// switch (message) {
//     case 'red':
//         result = 'STOP';
//         break;
//     case 'yellow':
//         result = 'READY'
//         break;
//     case 'green':
//         result = 'GO'
//         break;
//     default:
//         result = 'TYPE VALID COLOR'
// }
// console.log(result);


// let message = prompt('color ?');
// let action;

// if (message) {
//     message = message.toLowerCase();
// }

// switch (message) {
//     case 'red':
//         action = 'stop';
//         break;
//     case 'yellow':
//         action = 'ready'
//         break;
//     case 'green':
//         action = 'go';
//         break;
//     default:
//         action = 'be careful';
// }

// console.log(action);










// Task - 3
// Потрібно створити додаток для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 правильна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(text, answer) {
//     // console.log(answer);
//     let message = prompt(text);
//     if (message){
//         message = message.toLowerCase();
//     }

//     return message === answer;
// }
// const result = check('Хоч не літак, а крилатий, Без крил не може працювати.', 'вітряк');
// console.log(result);
// check('Через воду він проводить, А сам з місця вік не сходить', 'міст')
// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)


// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)






// Task - 4
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(deps) {
//     const daySpeed = 7;
//     const nightSpeed = 2;
//     let total = 0;
//     let days = 0;

//     while (total < deps) {
//         total += daySpeed;
//         days += 1;

//         if (total < deps) {
//             total -= nightSpeed;
//         }
//     }
//     console.log(days);
// }
// getDays(42)












// Task - 5
// Порахуй скільки голосних літер у реченні.

// function countVowel(str) {
//     const vowels = "aeiou";
//     let counter = 0;
//     for (let i = 0; i < str.length; i += 1) {
//         if (vowels.includes(str[i].toLowerCase())) {
//             counter += 1
//         }
//     }

//     return counter;
// }
// console.log(countVowel("HELLO WORLD")) // 3
// console.log(countVowel("Junior Web Developer")) // 8


// ###########

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//     switch (totalSpent === totalSpent) {
//         case totalSpent >= 50000:
//             discount = GOLD_DISCOUNT;
//             break;
//         case totalSpent >= 20000:
//             discount = SILVER_DISCOUNT;
//             break;
//         case totalSpent >= 5000:
//             discount = BRONZE_DISCOUNT;
//             break;
//         default:
//             discount = BASE_DISCOUNT;
//     }
//     console.log(discount);
    
//   // Change code above this line
//   return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);


// ############3

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
//   console.log(message);
//   // Change code above this line
//     return message;

// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);



// ################3

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message = ADMIN_PASSWORD === password ? "Access is allowed" : "Access denied, wrong password!"
//   // Change code above this line
//     console.log(message);
//   return message;
// }
// checkPassword("jqueryismyjam");
// checkPassword("angul4r1sl1f3");
// checkPassword("r3actsux");


// #####################

// function getSubscriptionPrice(type) {
//   let price;

//  switch (type) {
//     case "professional" :
//       price = 20;
//       break;

//     case "organization" :
//       price = 50;
//       break;

//     case "starter":
//       price = 0;
//       break;
//   }

//     console.log(price);
//   return price;
// }
// getSubscriptionPrice("professional");
// getSubscriptionPrice("organization");
// getSubscriptionPrice("starter");


// #####################

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
  
//     switch (password) {
//         case null:
//             message = "Canceled by user!";
//             break;
//         case ADMIN_PASSWORD:
//             message ="Welcome!";
//             break;
//         default:
//             message = "Access denied, wrong password!";
          
//     }
//   console.log(message);
//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");


// ######################
// function getShippingCost(country) {
//     let message;
//     let price;
  
//     switch (country) {
//         case 'China':
//             price = 100;
//             message =`Shipping to ${country} will cost ${price} credits`;
//             break;
//         case 'Chile':
//             price = 250;
//             message =`Shipping to ${country} will cost ${price} credits`;
//             break;
//         case 'Australia':
//             price = 170;
//             message =`Shipping to ${country} will cost ${price} credits`;
//             break;
//         case 'Jamaica':
//             price = 120;
//             message =`Shipping to ${country} will cost ${price} credits`;
//             break;
//         default:
//             message = "Sorry, there is no delivery to your country" ;
//     }
    
//     console.log(message);
//     return message;

// }

// getShippingCost("Australia");
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");


// #######

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
//   console.log(message);
//   return message;
// }
// getNameLength("Poly");
// getNameLength("Harambe");
// getNameLength("Billy");
// getNameLength("Joe");


// #######

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(courseTopic);
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// ##############
// function getSubstring(string, length) {
//   const substring = string.slice (string[0], length);
//     console.log(substring);
//   return substring;
// }
// getSubstring("Hello world", 3);
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);


// ########################3
// function formatMessage(message, maxLength) {
//   let result;
//     const a = message.slice(message[0], maxLength);
//     const b = maxLength < message.length ? "..." : ""
//     result = `${a}${b}`;
//     console.log(result);
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);


// ###############
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();
// console.log(normalizedInput);
//   return normalizedInput;
// }
// normalizeInput("Hello world");
// normalizeInput("This ISN'T SpaM");
// normalizeInput("Big SALE");


// #########################
// function checkForName(fullName, name) {
//     const result = fullName.includes(name);
//     console.log(result);
//   return result;
// }
// checkForName("Egor Kolbasov", "Egor");
// checkForName("Egor Kolbasov", "egor");
// checkForName("Egor Kolbasov", "egOr");
// checkForName("Egor Kolbasov", "Zhenya");
// checkForName("Vadim Nekrasov", "Vadim");
// checkForName("Vadim Nekrasov", "vadim");
// checkForName("Vadim Nekrasov", "Dima");


// #############################
// function checkForSpam(message) {
//     let result;
//     message = message.toLowerCase();
//     const a = "sale";
//     const b = "spam";
//     result = message.includes(a) || message.includes(b)
//     console.log(result);
//   return result;
// }
// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");
// checkForSpam("Trust me, this is not a spam message");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("[SPAM] How to earn fast money?");

// function checkForSpam(message) {
//     let result;
//     message = message.toLowerCase();
//     const a = "sale";
//     const b = "spam";
//     result = message.includes(a) || message.includes(b)
//     console.log(result);
//   return result;
// }
// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");
// checkForSpam("Trust me, this is not a spam message");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("[SPAM] How to earn fast money?");

