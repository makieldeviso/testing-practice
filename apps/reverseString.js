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

export default reverseString