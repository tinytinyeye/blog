import Head from 'next/head';
import { Box } from '@mui/material';

import { Header } from './Header';

export const Layout = ({ children, pageTitle, description }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <meta name="Description" content={description}></meta>
                <title>{pageTitle}</title>
            </Head>
            <Box component="main">
                <Header />
                <Box
                    sx={{
                        maxWidth: '600px',
                        margin: '2rem auto',
                        padding: '0 1rem',
                        lineHeight: '1.5rem',
                    }}
                >
                    {children}
                </Box>
            </Box>
        </>
    );
};
