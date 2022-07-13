//з1
// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// let result = arr.map(function(elem) {
//   newArr.push(elem**2);
// });

// console.log(newArr); 
//з2

// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// let result = arr.map(function(elem) {
//   newArr.push(elem + '!');
// });

// console.log(newArr); 

// let arr = ['13','23', '33', '43', '53'];
// let newArr = [];
// let result = arr.map(function(elem) {
//   newArr.push(elem.split('').reverse().join(''));
// });

// console.log(newArr); 

// Задача 4⋕js.Pm.Enm.Mp.4
// Дан следующий массив:

// let arr = ['123', '456', '789'];
// let newArr = [];
// // Используя метод map преобразуйте этот массив в следующий:

// // let arr = [
// // 	[1, 2, 3],
// // 	[4, 5, 6],
// // 	[7, 8, 9]
// // ];

// let result = arr.map(function(elem) {
//   newArr.push(elem.split(''));
// });
// console.log(newArr)


// Задача 5

// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.

// let arr = [1, 1, 1, 1, 1];
// let newArr = [];

// let result = arr.map(function(elem, index) {
//   newArr.push(elem * index)
// })

// console.log(newArr)