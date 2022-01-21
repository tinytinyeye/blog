import Link from 'next/link';
import { Box } from '@mui/material';

import { HeadPost } from './HeadPost';

export const Post = ({ post }) => {
    const {
        link,
        module: { meta },
    } = post;

    return (
        <Box component="article" sx={{ mb: '3rem' }}>
            <HeadPost meta={meta} />
            <Link href={'/blog' + link}>
                <a>Read more &rarr;</a>
            </Link>
        </Box>
    );
};
