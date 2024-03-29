// В качестве значения по умолчанию можно также указывать функцию. Пусть, к примеру, у нас есть функция, возвращающая текущий день недели:

function func() {
	return (new Date).getDate();
}

function funcMonth() {
	return (new Date).getMonth() + 1;
}
// Давайте укажем эту функцию в качестве значения переменной day:
let arr = [];
let [year, month = funcMonth(), day = func()] = arr;
console.log(month, day);
// №1⊗jsPmDstAFDV

// Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год.