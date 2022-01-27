import React from 'react';
import { Box } from '@mui/material';
import LetterResult from './LetterResult';

interface MostLikelyVowelsProps {
    analysis: Record<string, number>;
}

const MostLikelyVowels: React.FC<MostLikelyVowelsProps> = ({ analysis }) => {
    const entries = Object.entries(analysis).sort(([, a], [, b]) => b - a);

    return (
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mb: 2 }}>
            {entries.map(([letter, probability]) => (
                <LetterResult
                    key={`letter_result_${letter}`}
                    letter={letter}
                    probability={probability}
                    variant="vowel"
                    sx={{ mr: 1 }}
                />
            ))}
        </Box>
    );
};

export default MostLikelyVowels;
