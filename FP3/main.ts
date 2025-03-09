
function filterMultiples(arr: number[], multiple: number): number[] {
    return arr.filter(num => num % multiple === 0);
}

function joinStrings(arr: string[], separator: string): string {
    return arr.join(separator);
}

function sortByProperty<T, K extends keyof T>(arr: T[], property: K): T[] {
    return arr.sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    });
}

function withLogging<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> {
    return (...args: Parameters<T>): ReturnType<T> => {
        console.log(`Calling function with arguments: ${JSON.stringify(args)}`);
        const result = fn(...args);
        return result;
    };
}

// Фильтрация кратных чисел
const numbers = [1, 2, 3, 4, 5, 6];
const multiplesOfThree = filterMultiples(numbers, 3);
console.log(multiplesOfThree); // [3, 6]

// Объединение строк
const strings = ["Hello", "world", "TypeScript"];
const joinedString = joinStrings(strings, ", ");
console.log(joinedString);
// "Hello, world, TypeScript"

// Сортировка объектов по свойству
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
const sortedPeople = sortByProperty(people, "age");
console.log(sortedPeople);
// [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]

// Логирование функции
const loggedAdd = withLogging(filterMultiples);
const result = loggedAdd(numbers, 2);
console.log(result);
// Calling function with arguments: [[1,2,3,4,5,6],2]
// [2, 4, 6]
