// Задача 1⋕js.Pm.Dst.Ar.1

// В следующем коде части массива записываются в соответствующие переменные:
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [name,  surname, department, position, salary] = arr;
console.log(name,  surname, department, position,salary)

