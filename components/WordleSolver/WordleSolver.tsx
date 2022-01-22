import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

import PlacedLetters from './PlacedLetters';
import ValidLetters from './ValidLetters';
import BadLetters from './BadLetters';
import { Store } from './Store';

const WordleSolver = () => {
    return (
        <Store>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'black',
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
                </Box>
            </Box>
        </Store>
    );
};

export default WordleSolver;
