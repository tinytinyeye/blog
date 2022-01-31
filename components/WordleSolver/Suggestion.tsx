import React, { forwardRef, useState } from 'react';
import useSWR from 'swr';
import { styled } from '@mui/material/styles';
import {
    Box,
    Button,
    Tooltip,
    ClickAwayListener,
    TooltipProps,
    tooltipClasses,
} from '@mui/material';

import { fetcher } from 'utils/networks';
import { palette } from './colors';
import { LettersState } from './hooks';

// @ts-ignores
const Item = styled(Button)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: palette.gray,
    width: '100%',
}));

export const Suggestion = forwardRef<
    HTMLButtonElement,
    {
        suggestion: string;
        state: LettersState;
        onClick: () => void;
    }
>(({ suggestion, state, onClick, ...props }, ref) => {
    const { placedLetters, validLetters } = state;

    return (
        <Item ref={ref} onClick={onClick} {...props}>
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
});

Suggestion.displayName = 'Suggestion';

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 500,
    },
});

export const SuggestionWithTooltip: React.FC<{
    word: string;
    state: LettersState;
}> = ({ word, state }) => {
    const [shouldFetch, setShouldFetch] = useState(false);
    const [open, setOpen] = useState(false);

    const { data, error } = useSWR(
        shouldFetch ? `https://api.dictionaryapi.dev/api/v2/entries/en/${word}` : null,
        fetcher
    );

    const definition =
        (data || {})?.[0]?.meanings?.[0].definitions?.[0]?.definition ||
        'Loading';

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        if (!shouldFetch) setShouldFetch(true);
        setOpen(true);
    };

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <CustomWidthTooltip
                PopperProps={{
                    disablePortal: true,
                }}
                onClose={handleClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={error ? 'Not found' : definition}
                sx={{ width: '50vw' }}
            >
                <Suggestion
                    suggestion={word}
                    state={state}
                    onClick={open ? handleClose : handleOpen}
                />
            </CustomWidthTooltip>
        </ClickAwayListener>
    );
};

export default SuggestionWithTooltip;
