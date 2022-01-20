import Layout from "../components/Layout";
import { Post } from '../components/Post';
import { posts } from '../getAllPosts';

export default function IndexPage() {
    return (
        <Layout pageTitle="Blog" description="My Personal Blog">
            {posts.map((post) => (
                <Post key={post.link} post={post} />
            ))}
        </Layout>
    );
}
