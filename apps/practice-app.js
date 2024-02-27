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

console.log(reverseString('supernatural'))
export { capitalize, reverseString }