import { Layout } from './Layout';
import { HeadPost } from './HeadPost';

export const BlogPost = ({ children, meta }) => {
    return (
        <Layout pageTitle="Blog" description="My Personal Blog">
            <HeadPost meta={meta} isBlogPost />
            <article>{children}</article>
        </Layout>
    );
};
