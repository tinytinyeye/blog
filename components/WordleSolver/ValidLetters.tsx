import React, { useContext } from 'react';

import Letters from './Letters';
import { LettersContext } from './Store';
import { clearValidLetters, setValidLetter, useLetters } from './hooks';

const ValidLetters = () => {
    const [state] = useContext(LettersContext);
    const { validLetters } = state;

    return (
        <Letters
            variant="valid"
            letters={validLetters}
            setLetter={setValidLetter}
            clearLetters={clearValidLetters}
            title="Valid letters"
        />
    );
};

export default ValidLetters;
