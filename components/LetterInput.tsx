import React from 'react';
import { Input } from '@mui/material';

interface LetterInputProps {
    variant: 'placed' | 'valid' | 'bad';
    onChange: (character: string) => void;
    onComplete: () => void;
}

const LetterInput: React.FC<LetterInputProps> = () => {
    return <Input
        sx={{
            backgroundColor: 'white',
            width: '3rem',
            height: '3rem',
            p: 0,
            display: 'flex',
            input: { textAlign: 'center' },
            justifyContent: 'center',
            fontSize: '32px'
        }}
    />
}

export default LetterInput;
