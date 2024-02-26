import { capitalize } from "../apps/practice-app";

test (
    'capitalize-1',
    () => {
        expect (
            capitalize('metronome')

        ).toBe('Metronome')
    }
)

test (
    'capitalize-2',
    () => {
        expect (
            capitalize('rizal')

        ).toBe('Rizal');
    }
)