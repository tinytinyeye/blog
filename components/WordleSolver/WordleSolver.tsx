import React, { useContext } from 'react';
import { Box, Divider, Typography } from '@mui/material';

import PlacedLetters from './PlacedLetters';
import ValidLetters from './ValidLetters';
import BadLetters from './BadLetters';
import { LettersContext } from './Store';
import { useLettersSuggestions } from './hooks';
import MostLikelyVowels from './MostLikelyVowels';
import MostLikelyLetters from './MostLikelyLetters';

const WordleSolver = () => {
    const [state] = useContext(LettersContext);
    const { data, isLoading } = useLettersSuggestions(state);
    const suggestions = isLoading ? [] : data.suggestions;
    const mostLikelyVowels = isLoading ? {} : data.mostLikelyVowels;
    const mostLikelyLetters = isLoading ? {} : data.mostLikelyLetters;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                height: '100vh',
                backgroundColor: '#121213',
            }}
        >
            <Box
                sx={{
                    minWidth: '80vw',
                    maxWidth: '80rem',
                    alignSelf: 'center',
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        color: '#d7dadc',
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
                    <MostLikelyVowels analysis={mostLikelyVowels} />
                    <MostLikelyLetters analysis={mostLikelyLetters} />
                    <Box
                        component="ul"
                        sx={{
                            alignSelf: 'center',
                            height: '15vh',
                            overflowY: 'scroll',
                        }}
                    >
                        {suggestions.map((suggestion) => (
                            <Box component="li" key={suggestion}>
                                {suggestion}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default WordleSolver;
