let arr = ['John', 'Smit', 'development', 'programmer'];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];

// Переделайте этот код через деструктуризацию согласно изученной теории.

let [name, surname, department, programmer] = arr;

let position;
if (programmer !== undefined) {
	position = programmer;
  console.log(position)
} else {
	position = 'trainee';
}
