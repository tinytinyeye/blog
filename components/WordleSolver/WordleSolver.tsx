import React, { useContext, useState } from 'react';
import { Box, Divider, Typography, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import PlacedLetters from './PlacedLetters';
import ValidLetters from './ValidLetters';
import BadLetters from './BadLetters';
import { LettersContext } from './Store';
import { useLettersSuggestions } from './hooks';
import MostLikelyVowels from './MostLikelyVowels';
import MostLikelyLetters from './MostLikelyLetters';
import Suggestions from './Suggestions';

const WordleSolver = () => {
    const [state] = useContext(LettersContext);
    const { data, isLoading } = useLettersSuggestions(state);
    const suggestions = isLoading ? [] : data.suggestions;
    const mostLikelyVowels = isLoading ? {} : data.mostLikelyVowels;
    const mostLikelyLetters = isLoading ? {} : data.mostLikelyLetters;

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                <Divider sx={{ borderColor: '#d7dadc', width: '100%' }} />
                <PlacedLetters />
                <ValidLetters />
                <BadLetters />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                                onChange={handleChange}
                                aria-label="Suggestion tabs"
                                variant="fullWidth"
                            >
                                <Tab
                                    label="Letters"
                                    value="1"
                                    sx={{ color: '#d7dadc' }}
                                />
                                <Tab
                                    label="Words"
                                    value="2"
                                    sx={{ color: '#d7dadc' }}
                                />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <MostLikelyVowels analysis={mostLikelyVowels} />
                            <MostLikelyLetters analysis={mostLikelyLetters} />
                        </TabPanel>
                        <TabPanel value="2">
                            <Suggestions suggestions={suggestions} />
                        </TabPanel>
                    </TabContext>
                </Box>
            </Box>
        </Box>
    );
};

export default WordleSolver;
