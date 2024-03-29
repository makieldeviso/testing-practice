import capitalize from "../apps/capitalize";
import reverseString from "../apps/reverseString";
import calculator from "../apps/calculator";
import caesarCipher from "../apps/caesarCipher";
import analyzeArray from "../apps/analyzeArray";

test (
    'capitalize-test-1',
    () => {
        expect (
            capitalize('metronome')

        ).toMatch('Metronome')
    }
)

test (
    'capitalize-test-2',
    () => {
        expect (
            capitalize('rizal')

        ).toMatch('Rizal');
    }
)

test ('reverseString-test-1', () => {
    expect (
        reverseString ('supernatural')

    ).toMatch('larutanrepus');
})

// Proper string are lower cased
test ('reverseString-test-2', () => {
    expect (
        reverseString ('Intense')
        
    ).toMatch('esnetni');
})

// calculator add
test ('calculator-test-1', () => {
    expect(
        calculator.add(5,6)
    ).toBe(11)
})

// Check for parsing
test ('calculator-test-2', () => {
    expect(
        calculator.add('5',6)
    ).toBe(11)
})

// Check for parsing
test ('calculator-test-3', () => {
    expect(
        calculator.add('12','6')
    ).toBe(18)
})

// calculator subtract
test ('calculator-test-4', () => {
    expect(
        calculator.subtract(5,6)
    ).toBe(-1);
})

// calculator divide
test ('calculator-test-5', () => {
    expect(
        calculator.divide(5,6)
    ).toBeCloseTo(0.833);
})

// calculator multiply
test ('calculator-test-6', () => {
    expect(
        calculator.multiply(5,6)
    ).toBe(30);
})

// Caesars cipher test
test ('caesarCipher-test-1', () => {
    expect(
        caesarCipher('Hello World', 5)
    ).toMatch('MJQQT BTWQI')
})

test ('caesarCipher-test-2', () => {
    expect(
        caesarCipher('Hello2World!', 180)
    ).toMatch('FCJJM2UMPJB!')
})

// Analyze Array tests
test ('analyzeArray-test-1', () => {
    expect (
        analyzeArray([5, 6, 10, 22, 66])
    ).toEqual({
        average: 21.8,
        min: 5,
        max: 66,
        length: 5
    })
})

test ('analyzeArray-test-2', () => {
    expect (
        analyzeArray([50, '30', 11, 22, '69', 2])
    ).toEqual({
        average: 30.667,
        min: 2,
        max: 69,
        length: 6
    })
})

test ('analyzeArray-test-3', () => {
    expect ( () => {
            analyzeArray([5, 'Six', 10, 22, '66'])
        }
    ).toThrow()
})