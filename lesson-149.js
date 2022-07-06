//Задача 1
// Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии выведите все примитивные элементы этого объекта на экран.

// let arr = {
//   a: 1,
//   b: { c: 2, d: 3, e: 4 },
//   f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } }
// };

// function func(arr) {
//   for (let elem in arr) {
//     if (typeof arr[elem] == "object") {
//       func(arr[elem]);
//     } else {
//       console.log(arr[elem]);
//     }
//   }
// }

// func(arr);


//Задача 2
// Дан многомерный массив произвольного уровня вложенности, например, такой:
// [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:
// [1, 2, 7, 8, 3, 4, 5, 6, 7]

// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// let newArr = [];

// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			func(elem);
// 		} else {
// 			newArr.push(elem)
// 		}
// 	}
// }

// func(arr);

// console.log(newArr);

// Задача 3
// Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии найдите сумму элементов этого объекта.

// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

// function func(obj) {
// 	let sum = 0;
	
// 	for (let elem in obj) {
// 		if (typeof obj[elem] == 'object') {
// 			sum += func(obj[elem]);
// 		} else {
// 			sum += obj[elem];
// 		}
// 	}
	
// 	return sum;
// }

// console.log(func(obj));

//Задача 4

// Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
// ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
// С помощью рекурсии слейте элементы этого массива в одну строку:
// 'abcdefgjk'

// let arr =  ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// let newArr = [];

// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			func(elem);
// 		} else {
// 			newArr.push(elem)
// 		}
// 	}
// }

// func(arr);

// console.log(newArr.join(''));

//Задача 5

// Дан многомерный массив произвольного уровня вложенности, например, такой:
// [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
// Возведите все элементы-числа этого массива в квадрат.

// let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

// function func(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] == 'object') {
// 			arr[i] = func(arr[i]);
// 		} else {
// 			arr[i] = arr[i]**2;
// 		}
// 	}
	
// 	return arr;
// }

// console.log(func(arr));