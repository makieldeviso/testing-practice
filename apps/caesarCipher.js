const caesarCipher = function (string, shifter) {

    const nonLetterRegex = /[\s\d\W]/;
    // Distribute string to array
    const stringArr = string.split('');

    // Change characters to upper case
    const upperCaseArr = [];
    stringArr.forEach(char => {
        upperCaseArr.push(char.toUpperCase());
    })

    // Store letters asci in an array
    const stringCodeArr = [];
    upperCaseArr.forEach(char => {
        if (nonLetterRegex.test(char)) {
            // Push a the string itself to the stringCodeArr
            // Note: parsing the char to string helps exempting the character for shifting
            stringCodeArr.push(String(char));

        } else {
            stringCodeArr.push(char.charCodeAt(0));
        }
    })
    
    // Shift characters to shifter
    const shiftCodeArr = [];
    stringCodeArr.forEach(code => {
        if (typeof code !== 'number') {
            shiftCodeArr.push(code);

        } else {
            let newCode = code + shifter;
            
            // Note: 65-90 -> A-Z
            if (newCode > 90) {
                // Turns calculate how many times the code will count on the alphabet
                const turns = Math.floor((newCode - 90) / 26);

                // If the shifted code exceed 90 which is Z, subtract 90 to cycle back to A
                // If the subtracted value still exceeds 90 subtract 26(26 alphabet letters) to the code 
                // until less than or equal to 90
                newCode = newCode - 90 - (26 * turns) + 64
            }
            
            shiftCodeArr.push(String.fromCharCode(newCode));
        }
    })

    return shiftCodeArr.join('');

}

export default caesarCipher