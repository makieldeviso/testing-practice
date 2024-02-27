import { capitalize, reverseString } from "../apps/practice-app";

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