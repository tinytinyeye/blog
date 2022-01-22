import React, { useContext } from 'react';

import Letters from './Letters';
import { LettersContext } from './Store';
import { clearBadLetters, setBadLetter } from './hooks';

const BadLetters = () => {
    const [state] = useContext(LettersContext);
    const { badLetters } = state;

    return (
        <Letters
            variant="bad"
            letters={badLetters}
            setLetter={setBadLetter}
            clearLetters={clearBadLetters}
            title="Bad letters"
        />
    );
};

export default BadLetters;
