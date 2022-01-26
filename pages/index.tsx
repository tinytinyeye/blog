import { Layout, Post } from 'components/Blog';
import { posts } from 'utils/getAllPosts';

export default function IndexPage() {
    return (
        <Layout pageTitle="Blog" description="My Personal Blog">
            {posts.map((post) => (
                <Post key={post.link} post={post} />
            ))}
        </Layout>
    );
}
