document.addEventListener("DOMContentLoaded", () => {
    const number1Input = document.getElementById("number1") as HTMLInputElement;
    const number2Input = document.getElementById("number2") as HTMLInputElement;
    const resultInput = document.getElementById("result") as HTMLInputElement;
    const buttons = document.querySelectorAll(".btn");

    type Operation = (num1: number, num2?: number) => number;

    const add: Operation = (num1, num2 = 0) => num1 + num2;
    const subtract: Operation = (num1, num2 = 0) => num1 - num2;
    const multiply: Operation = (num1, num2 = 1) => num1 * num2;
    const divide: Operation = (num1, num2 = 1) => num1 / num2;
    const power: Operation = (num1, num2 = 1) => Math.pow(num1, num2);
    const sqrt: Operation = (num1) => Math.sqrt(num1);

    const handleButtonClick = (operation: Operation) => () => {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
        let result = 0;

        if (operation === sqrt) {
            result = operation(num1);
        } else {
            result = operation(num1, num2);
        }

        resultInput.value = result.toString();
    };

    buttons.forEach((button) => {
        const operator = (button as HTMLButtonElement).dataset.operator!;
        let operation: Operation;

        switch (operator) {
            case "+":
                operation = add;
                break;
            case "-":
                operation = subtract;
                break;
            case "*":
                operation = multiply;
                break;
            case "/":
                operation = divide;
                break;
            case "^":
                operation = power;
                break;
            case "√":
                operation = sqrt;
                break;
            default:
                operation = add;
        }

        button.addEventListener("click", handleButtonClick(operation));
    });
});
