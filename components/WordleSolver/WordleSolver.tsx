import React, { useContext, useState } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';

import PlacedLetters from './PlacedLetters';
import ValidLetters from './ValidLetters';
import BadLetters from './BadLetters';
import { LettersContext } from './Store';

const WordleSolver = () => {
    const [state] = useContext(LettersContext);
    const { placedLetters, validLetters, badLetters } = state;
    const [suggestions, setSuggestions] = useState([]);

    const onUpdate = () => {
        const placedLettersParam = placedLetters
            .map((char) => char.toLowerCase())
            .join(',');
        const validLettersParam = validLetters
            .map((char) => char.toLowerCase())
            .join(',');
        const badLettersParam = badLetters
            .map((char) => char.toLowerCase())
            .join(',');

        const url = `/api/getWordleSuggestions?placedLetters=${placedLettersParam}&validLetters=${validLettersParam}&badLetters=${badLettersParam}`;

        fetch(url)
            .then((res) => res.json())
            .then(({ suggestions }) => {
                setSuggestions(suggestions);
            })
            .catch((err) => console.log(err));
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                overflowY: 'auto',
            }}
        >
            <Box
                sx={{
                    minWidth: '32rem',
                    maxWidth: '60vw',
                    alignSelf: 'center',
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        color: 'white',
                        py: 2,
                        fontWeight: '300',
                        textAlign: 'center',
                    }}
                >
                    Wordle Solver
                </Typography>
                <Divider sx={{ borderColor: 'white', width: '100%' }} />
                <PlacedLetters />
                <ValidLetters />
                <BadLetters />
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
                    <Button variant="contained" onClick={onUpdate} sx={{ alignSelf: 'center' }}>
                        Update
                    </Button>
                    <Box component="ul" sx={{ alignSelf: 'center' }}>
                        {suggestions.map((suggestion) => (
                            <Box component="li" key={suggestion}>{suggestion}</Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default WordleSolver;
