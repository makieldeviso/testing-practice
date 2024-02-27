const capitalize = function (string) {
    const firstLetter = string.slice(0,1);
    const restLetters = string.slice(1);

    return `${firstLetter.toUpperCase()}${restLetters}`
}

const reverseString = function (string) {
    const stringArray = string.split('');
    let reverseStringArray = [];
    stringArray.forEach(char => {
        const lowerCase = char.toLowerCase();
        reverseStringArray.unshift(lowerCase);
    })

    const newReverseString = reverseStringArray.join('');
    return newReverseString;
}

// class for calculator
class CalcCreate {
    constructor () {}

    checkInput (a, b) {
    // Check if input is a string or number,
    // If string parse to number
        return [Number(a), Number(b)];
    }

    add (a, b) {
        const operands = this.checkInput(a, b);
        return operands[0] + operands[1];
    }

    subtract (a, b) {
        const operands = this.checkInput(a, b);
        return operands[0] - operands[1];
    }

    divide (a, b) {
        const operands = this.checkInput(a, b);
        const quotient = Number.parseFloat(operands[0] / operands[1]).toFixed(3);
        return Number(quotient);
    }

    multiply (a, b) {
        const operands = this.checkInput(a, b);
        return operands[0] * operands[1];
    }
}
// Execute new CalcCreate to make calculator object
const calculator = new CalcCreate();

export { capitalize, reverseString, calculator}