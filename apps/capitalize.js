const capitalize = function (string) {
    const firstLetter = string.slice(0,1);
    const restLetters = string.slice(1);

    return `${firstLetter.toUpperCase()}${restLetters}`
}

export default capitalize