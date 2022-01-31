import React from 'react';
import { Box, Grid } from '@mui/material';

import { LettersState } from './hooks';
// import { Suggestion } from './Suggestion';
import { SuggestionWithTooltip } from './Suggestion';

const Suggestions: React.FC<{ suggestions: string[]; state: LettersState }> = ({
    suggestions,
    state,
}) => (
    <Box sx={{ flexGrow: 1, height: '20vh', overflowY: 'scroll' }}>
        <Grid container spacing={2}>
            {suggestions.map((suggestion) => (
                <Grid item xs={4} md={2} key={`suggestion_${suggestion}`}>
                    <SuggestionWithTooltip word={suggestion} state={state} />
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default Suggestions;
