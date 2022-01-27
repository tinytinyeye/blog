import React from 'react';
import { styled, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// @ts-ignores
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: '#3a3a3c',
    color: '#d7dadc',
}));

const Suggestions: React.FC<{ suggestions: string[] }> = ({ suggestions }) => (
    <Box sx={{ flexGrow: 1, height: '25vh', overflowY: 'scroll' }}>
        <Grid container spacing={2}>
            {suggestions.map((suggestion) => (
                <Grid item xs={4} md={2} key={`suggestion_${suggestion}`}>
                    <Item>{suggestion}</Item>
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default Suggestions;
