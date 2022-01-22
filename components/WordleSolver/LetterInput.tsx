import React from 'react';
import { Input, SxProps } from '@mui/material';

export type LetterVariant = 'placed' | 'valid' | 'bad';

interface LetterInputProps {
    variant: LetterVariant;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    sx?: SxProps;
}

const variantToBackgroundColor = {
    placed: '#538d4e',
    valid: '#b59f3b',
    bad: '#3a3a3c',
};

const LetterInput = React.forwardRef<HTMLInputElement, LetterInputProps>(
    ({ variant, value, onChange, sx = {} }, ref) => {
        return (
            <Input
                sx={{
                    backgroundColor: value
                        ? variantToBackgroundColor[variant]
                        : 'white',
                    color: value ? 'white' : 'black',
                    width: '3rem',
                    height: '3rem',
                    p: 0,
                    display: 'flex',
                    input: { textAlign: 'center', textTransform: 'uppercase' },
                    justifyContent: 'center',
                    fontSize: '32px',
                    ...sx,
                }}
                value={value}
                onChange={onChange}
                inputRef={ref}
            />
        );
    }
);

LetterInput.displayName = 'LetterInput';

export default LetterInput;