import React, { useState, forwardRef } from 'react';
import useSWR from 'swr';
import { Box, Grid, Paper, ClickAwayListener } from '@mui/material';

import { fetcher } from 'utils/networks';
import { LettersState } from './hooks';
import { Suggestion } from './Suggestion';
import { palette } from './colors';

const useDefinition = (word = '') => {
    const { data, error } = useSWR(
        word ? `https://api.dictionaryapi.dev/api/v2/entries/en/${word}` : null,
        fetcher
    );

    const definition =
        (data || {})?.[0]?.meanings?.[0].definitions?.[0]?.definition ||
        'Loading';

    return error ? 'Not found' : definition;
};

const Definition = forwardRef<HTMLDivElement, { word: string }>(
    ({ word }, ref) => {
        const definition = useDefinition(word);

        return (
            word && (
                <Paper
                    sx={{
                        p: 1,
                        mb: 2,
                        backgroundColor: palette.gray,
                        color: palette.white,
                        textAlign: 'center',
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%'
                    }}
                    ref={ref}
                >
                    {definition}
                </Paper>
            )
        );
    }
);
Definition.displayName = 'Definition';

const Suggestions: React.FC<{ suggestions: string[]; state: LettersState }> = ({
    suggestions,
    state,
}) => {
    const [wordForDefinition, setWordForDefinition] = useState('');

    return (
        <ClickAwayListener onClickAway={() => setWordForDefinition('')}>
            <Box sx={{ flexGrow: 1, height: '20vh', overflowY: 'scroll' }}>
                <Definition word={wordForDefinition} />

                <Grid container spacing={2}>
                    {suggestions.map((suggestion) => (
                        <Grid
                            item
                            xs={4}
                            md={2}
                            key={`suggestion_${suggestion}`}
                        >
                            <Suggestion
                                word={suggestion}
                                state={state}
                                onClick={() => setWordForDefinition(suggestion)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </ClickAwayListener>
    );
};

export default Suggestions;
