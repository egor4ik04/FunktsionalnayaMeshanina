// Массив чисел для примера
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Массив объектов для примера
const objects = [
    { id: 1, value: 10, specProp: 'secret' },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40, specProp: 'hello' },
    { id: 5, value: 50, specProp: 'world' },
];

console.log('=====   1   =====');
// 1) Разработайте набор чистых функций для работы с массивами:

//  • Функция, которая принимает массив чисел и возвращает новый массив,
//      содержащий только четные числа.
const getEvenNumbers = (arr) => arr.filter(n => n % 2 == 0);
//  • Функция, которая принимает массив чисел и возвращает новый массив,
//      содержащий квадраты этих чисел.
const getSquaredNumbers = (arr) => arr.map(n => n ** 2);
//  • Функция, которая принимает массив объектов и возвращает новый массив,
//      содержащий только объекты с определенным свойством.
const filterByProperty = (arr, prop) => arr.filter(e => Object.hasOwn(e, prop));
//  • Функция, которая принимает массив чисел и возвращает их сумму.
const sumNumbers = (arr) => arr.reduce((sum, currNum) => sum + currNum);

console.log(getEvenNumbers(numbers));
console.log(getSquaredNumbers(numbers));
console.log(filterByProperty(objects, 'specProp'));
console.log(sumNumbers(numbers));


console.log('=====   2   =====');
// 2) Создайте функцию высшего порядка, которая принимает функцию
//      и массив в качестве аргументов и применяет функцию к каждому элементу массива,
//      возвращая новый массив с результатами.
const applyFunctionToArray = (func, arr) => arr.map(func);

console.log(applyFunctionToArray((n) => 'step ' + n, numbers));


console.log('=====   3   =====');
// 3) Используя разработанные функции, выполните следующие математические операции:
//  • Найдите сумму квадратов всех чётных чисел в заданном массиве.
const evenNumbers = getEvenNumbers(numbers);
const squaredEvenNumbers = getSquaredNumbers(evenNumbers);
const sumOfSquaredEvenNumbers = sumNumbers(squaredEvenNumbers);

//  • Найдите среднее арифметическое всех чисел, больших заданного значения,
//      в заданном массиве объектов.
const lowLimit = 25; // Заданное значение
const objectsWithValue = filterByProperty(objects, 'value');
const objectsGreaterThanLowLimit = objectsWithValue
    .filter((o) => o.value > lowLimit)
const valuesGreaterThanLowLimit =
    applyFunctionToArray((o) => o.value, objectsGreaterThanLowLimit) 
const sumValues = sumNumbers(valuesGreaterThanLowLimit);
const average = sumValues / valuesGreaterThanLowLimit.length;

console.log(sumOfSquaredEvenNumbers);
console.log(average);
