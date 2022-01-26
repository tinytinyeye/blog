import React from 'react';

import { Box, SxProps } from '@mui/material';

export type LetterResultVariant = 'vowel' | 'letter';

interface LetterResultProps {
    variant: LetterResultVariant;
    letter: string;
    probability: number;
    sx?: SxProps;
}

const variantToBackgroundColor = {
    vowel: '#538d4e',
    letter: '#3a3a3c',
};

const LetterResult: React.FC<LetterResultProps> = ({
    variant,
    letter,
    probability,
    sx = {},
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#d7dadc',
                width: '3rem',
                height: '3rem',
                ...sx,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    backgroundColor: variantToBackgroundColor[variant],
                    border: '2px solid #3a3a3c',
                    width: '1.5rem',
                    height: '1.5rem',
                    p: 0,
                    justifyContent: 'center',
                    fontSize: '20px',
                    mb: 1
                }}
            >
                {letter}
            </Box>
            <Box sx={{ fontSize: '12px' }}>{`${(probability * 100).toFixed(2)}%`}</Box>
        </Box>
    );
};

export default LetterResult;
