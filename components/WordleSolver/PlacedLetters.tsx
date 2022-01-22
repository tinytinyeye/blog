import React, { useContext } from 'react';

import Letters from './Letters';
import { LettersContext } from './Store';
import { clearPlacedLetters, setPlacedLetter } from './hooks';

const PlacedLetters = () => {
    const [state] = useContext(LettersContext);
    const { placedLetters } = state;

    return (
        <Letters
            variant="placed"
            letters={placedLetters}
            setLetter={setPlacedLetter}
            clearLetters={clearPlacedLetters}
            title="Placed letters"
        />
    );
};

export default PlacedLetters;
