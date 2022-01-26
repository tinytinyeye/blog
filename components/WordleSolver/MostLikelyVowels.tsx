import React from 'react';
import { Box } from '@mui/material';
import LetterResult from './LetterResult';

interface MostLikelyVowelsProps {
    analysis: Record<string, number>;
}

const MostLikelyVowels: React.FC<MostLikelyVowelsProps> = ({ analysis }) => {
    return (
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mb: 2 }}>
            {Object.entries(analysis).map(([letter, probability]) => (
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
