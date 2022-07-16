// Задача 1⋕js.Pm.Osr.SRAp.1

// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое (сумма делить на количество).

function middleNum(...nums) {
    let middleNum = 0;
    let sum = 0;
    for(let item of nums) {
      sum+=item
      middleNum = sum / nums.length
    }
    console.log(middleNum)
  }
  
   middleNum(1,2,3);