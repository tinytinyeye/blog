import React from 'react';
import { Box, Divider, Input, Typography } from '@mui/material';

import LetterInput from '../../../components/LetterInput';

// #538d4e

const Solver: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', backgroundColor: 'black' }}>
            <Box sx={{ maxWidth: '720px', alignSelf: 'center' }}>
                <Typography variant="h4" component="h1" sx={{ color: 'white', py: 2, fontWeight: '300' }}>
                    Wordle Solver
                </Typography>
                <Divider sx={{ borderColor: 'white', width: '100%' }} />
                <Typography variant="h6" sx={{ color: 'white', py: 2, textAlign: 'center' }}>
                    Placed letters
                </Typography>
                <LetterInput
                    variant="placed"
                    onChange={() => {}}
                    onComplete={() => {}}
                />
            </Box>
        </Box>
    )
}

export default Solver;
