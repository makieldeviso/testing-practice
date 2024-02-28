const validateArr = function (arr, newArr = []) {
    const current = arr.shift();
    
    if (current === undefined) {
        return newArr.sort((a , b) => a - b);
    }

    // If there is an invalid element in array cancels further validation 
    if (!Number(current)) {
        return false
    } 

    newArr.push(Number(current));
    return validateArr(arr, newArr);
}

// Calculate the average of number array and check floating point
// Max decimal places to three
const calcAverage = function (arr) {

    const rawAve = (arr.reduce((curr, accu) => (curr + accu), 0)) / arr.length;
    
    if (!Number.isSafeInteger(rawAve)) {
        return Number(Number.parseFloat(rawAve).toFixed(3));
    }
    
    return rawAve;
}

const analyzeArray = function (arr) {
    const validArr = validateArr(arr); // validateArr sorts the array

    if (!validArr) throw new Error('Invalid array argument. Kindly ensure that elements in the array are valid numbers');


    return {
        average: calcAverage(validArr),
        min: validArr[0],
        max: validArr[validArr.length - 1],
        length: validArr.length
    }
}

export default analyzeArray