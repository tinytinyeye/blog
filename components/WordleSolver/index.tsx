import React from 'react';

import { Store } from './Store';
import WordleSolver from './WordleSolver';

const WordleSolverWithStore = () => (
    <Store>
        <WordleSolver />
    </Store>
)

export default WordleSolverWithStore;
