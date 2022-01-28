import React from 'react';
import { styled, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { palette } from './colors';
import { LettersState } from './hooks';

// @ts-ignores
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: palette.gray,
}));

const Suggestion: React.FC<{ suggestion: string; state: LettersState }> = ({
    suggestion,
    state,
}) => {
    const { placedLetters, validLetters } = state;

    return (
        <Item>
            {suggestion.split('').map((char, i) => {
                if (placedLetters[i] === char)
                    return (
                        <Box
                            key={`${suggestion}_${i}`}
                            component="span"
                            sx={{ color: palette.green, fontWeight: 'bold' }}
                        >
                            {char}
                        </Box>
                    );
                if (validLetters.includes(char))
                    return (
                        <Box
                            key={`${suggestion}_${i}`}
                            component="span"
                            sx={{ color: palette.yellow, fontWeight: 'bold' }}
                        >
                            {char}
                        </Box>
                    );
                return (
                    <Box
                        key={`${suggestion}_${i}`}
                        component="span"
                        sx={{ color: palette.white }}
                    >
                        {char}
                    </Box>
                );
            })}
        </Item>
    );
};

const Suggestions: React.FC<{ suggestions: string[]; state: LettersState }> = ({
    suggestions,
    state,
}) => (
    <Box sx={{ flexGrow: 1, height: '20vh', overflowY: 'scroll' }}>
        <Grid container spacing={2}>
            {suggestions.map((suggestion) => (
                <Grid item xs={4} md={2} key={`suggestion_${suggestion}`}>
                    <Suggestion suggestion={suggestion} state={state} />
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default Suggestions;
