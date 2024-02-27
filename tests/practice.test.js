import { capitalize } from "../apps/practice-app";

test (
    'capitalize-test-1',
    () => {
        expect (
            capitalize('metronome')

        ).toBe('Metronome')
    }
)

test (
    'capitalize-test-2',
    () => {
        expect (
            capitalize('rizal')

        ).toBe('Rizal');
    }
)